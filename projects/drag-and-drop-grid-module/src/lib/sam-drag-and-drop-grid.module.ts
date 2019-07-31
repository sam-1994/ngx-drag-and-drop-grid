import {NgModule} from '@angular/core';
import {
  SamDragAndDropGridComponent,
  SamDragAndDropListContentOutletDirective,
  SamDragAndDropListDataDirective
} from './sam-drag-and-drop-grid.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    SamDragAndDropGridComponent,
    SamDragAndDropListContentOutletDirective,
    SamDragAndDropListDataDirective
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    SamDragAndDropGridComponent,
    SamDragAndDropListContentOutletDirective,
    SamDragAndDropListDataDirective
  ]
})
export class SamDragAndDropGridModule {
}
