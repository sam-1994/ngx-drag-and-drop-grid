import { TestBed } from '@angular/core/testing';

import { DragAndDropGridModuleService } from './drag-and-drop-grid-module.service';

describe('DragAndDropGridModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragAndDropGridModuleService = TestBed.get(DragAndDropGridModuleService);
    expect(service).toBeTruthy();
  });
});
