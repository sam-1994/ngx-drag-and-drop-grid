import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropGridExampleComponent } from './drag-and-drop-grid.component';
import {SamDragAndDropGridModule} from '@sam-1994/ngx-drag-and-drop-grid';

describe('DragAndDropListComponent', () => {
  let component: DragAndDropGridExampleComponent;
  let fixture: ComponentFixture<DragAndDropGridExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropGridExampleComponent ],
      imports: [SamDragAndDropGridModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropGridExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
