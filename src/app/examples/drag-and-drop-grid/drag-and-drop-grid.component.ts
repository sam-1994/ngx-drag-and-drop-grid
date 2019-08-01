import {Component, OnInit, ViewChild} from '@angular/core';
import {SamDragAndDropGridComponent} from '@sam-1994/ngx-drag-and-drop-grid';

@Component({
  selector: 'app-drag-and-drop-grid-example',
  templateUrl: './drag-and-drop-grid.component.html',
  styleUrls: ['./drag-and-drop-grid.component.sass']
})
export class DragAndDropGridExampleComponent implements OnInit {

  @ViewChild('listComponent', {static: true}) listComponent: SamDragAndDropGridComponent;

  public list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public secondList = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];

  public useSecond = false;

  ngOnInit() {
  }

  public add() {
    if (this.useSecond) {
      this.secondList.push(this.secondList.length * 2 + 2);
    } else {
      this.list.push(this.list.length + 1);
    }
    this.listComponent.renderItems();
  }

}
