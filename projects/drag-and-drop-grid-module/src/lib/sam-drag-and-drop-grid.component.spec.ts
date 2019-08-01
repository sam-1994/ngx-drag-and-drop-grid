import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamDragAndDropGridComponent } from './sam-drag-and-drop-grid.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

describe('SamDragAndDropGridComponent', () => {
  let component: SamDragAndDropGridComponent;
  let fixture: ComponentFixture<SamDragAndDropGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamDragAndDropGridComponent ],
      imports: [DragDropModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamDragAndDropGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
