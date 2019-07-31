import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropGridModuleComponent } from './drag-and-drop-grid-module.component';

describe('DragAndDropGridModuleComponent', () => {
  let component: DragAndDropGridModuleComponent;
  let fixture: ComponentFixture<DragAndDropGridModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropGridModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropGridModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
