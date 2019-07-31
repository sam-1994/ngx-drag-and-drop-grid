import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamDragAndDropGridComponent } from './sam-drag-and-drop-grid.component';

describe('VmDragAndDropListComponent', () => {
  let component: SamDragAndDropGridComponent;
  let fixture: ComponentFixture<SamDragAndDropGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamDragAndDropGridComponent ]
    })
    .compileComponents();
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
