import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropGridComponent } from './drag-and-drop-grid.component';

describe('DragAndDropListComponent', () => {
  let component: DragAndDropGridComponent;
  let fixture: ComponentFixture<DragAndDropGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
