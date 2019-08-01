import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {CdkDrag, CdkDragMove, CdkDropList, CdkDropListGroup, moveItemInArray} from '@angular/cdk/drag-drop';
import {ViewportRuler} from '@angular/cdk/overlay';

@Directive({
  selector: '[samDragAndDropListData]'
})
export class SamDragAndDropListDataDirective {
  constructor(public template: TemplateRef<any>) {
  }
}

@Directive({selector: '[samContentOutlet]'})
export class SamDragAndDropListContentOutletDirective {
  constructor(public viewContainer: ViewContainerRef) {
  }
}

@Component({
  selector: 'sam-drag-and-drop-grid',
  templateUrl: './sam-drag-and-drop-grid.component.html',
  styleUrls: ['./sam-drag-and-drop-grid.component.sass']
})
export class SamDragAndDropGridComponent implements AfterViewInit, OnChanges {

  @Input() public items: Array<any>;
  @Input() public columnNumber = 1;

  @ViewChildren(SamDragAndDropListContentOutletDirective) contentOutlet: QueryList<SamDragAndDropListContentOutletDirective>;
  @ContentChildren(SamDragAndDropListDataDirective) dragAndDropListData: QueryList<SamDragAndDropListDataDirective>;

  @ViewChild(CdkDropListGroup, {static: true}) listGroup: CdkDropListGroup<CdkDropList>;
  @ViewChild(CdkDropList, {static: true}) placeholder: CdkDropList;

  public target: CdkDropList;
  public targetIndex: number;
  public source: CdkDropList;
  public sourceIndex: number;
  public activeContainer;

  private static __isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
    return event.type.startsWith('touch');
  }

  private static __isInsideDropListClientRect(dropList: CdkDropList, x: number, y: number) {
    const {top, bottom, left, right} = dropList.element.nativeElement.getBoundingClientRect();
    return y >= top && y <= bottom && x >= left && x <= right;
  }

  constructor(private changeDetector: ChangeDetectorRef, private viewportRuler: ViewportRuler) {
    this.target = null;
    this.source = null;
  }

  ngAfterViewInit() {
    this.renderItems();

    const phElement = this.placeholder.element.nativeElement;

    phElement.style.display = 'none';
    phElement.parentElement.removeChild(phElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {

      if (!this.contentOutlet) {
        return;
      }
      this.renderItems();
    }
  }

  public renderItems() {
    this.changeDetector.detectChanges();

    this.contentOutlet.toArray().forEach((outlet: SamDragAndDropListContentOutletDirective, index: number) => {
      outlet.viewContainer.clear();
      outlet.viewContainer.createEmbeddedView(
        this.dragAndDropListData.first.template, {
          $implicit: this.items[index],
          index
        });
    });
    this.changeDetector.detectChanges();
  }

  dragMoved(e: CdkDragMove) {
    const point = this.getPointerPositionOnPage(e.event);

    this.listGroup._items.forEach(dropList => {
      if (SamDragAndDropGridComponent.__isInsideDropListClientRect(dropList, point.x, point.y)) {
        this.activeContainer = dropList;
        return;
      }
    });
  }

  drop() {
    if (!this.target) {
      return;
    }

    const phElement = this.placeholder.element.nativeElement;
    const parent = phElement.parentElement;

    phElement.style.display = 'none';

    parent.removeChild(phElement);
    parent.appendChild(phElement);
    parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);

    this.target = null;
    this.source = null;

    if (this.sourceIndex !== this.targetIndex) {
      moveItemInArray(this.items, this.sourceIndex, this.targetIndex);
      this.renderItems();
    }
  }

  public enter = (drag: CdkDrag, drop: CdkDropList) => {
    if (drop === this.placeholder) {
      return true;
    }

    if (drop !== this.activeContainer) {
      return false;
    }

    const phElement = this.placeholder.element.nativeElement;
    const sourceElement = drag.dropContainer.element.nativeElement;
    const dropElement = drop.element.nativeElement;

    const dragIndex = Array.from(dropElement.parentElement.children).indexOf(this.source ? phElement : sourceElement);
    const dropIndex = Array.from(dropElement.parentElement.children).indexOf(dropElement);

    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = drag.dropContainer;

      phElement.style.width = sourceElement.clientWidth + 'px';
      phElement.style.height = sourceElement.clientHeight + 'px';

      sourceElement.parentElement.removeChild(sourceElement);
    }

    this.targetIndex = dropIndex;
    this.target = drop;

    phElement.style.display = '';
    dropElement.parentElement.insertBefore(phElement, (dropIndex > dragIndex
      ? dropElement.nextSibling : dropElement));

    this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
    return false;
    // tslint:disable-next-line:semicolon
  };

  /** Determines the point of the page that was touched by the user. */
  getPointerPositionOnPage(event: MouseEvent | TouchEvent) {
    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    const point = SamDragAndDropGridComponent.__isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
    const scrollPosition = this.viewportRuler.getViewportScrollPosition();

    return {
      x: point.pageX - scrollPosition.left,
      y: point.pageY - scrollPosition.top
    };
  }
}
