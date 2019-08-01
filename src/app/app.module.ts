import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DragAndDropGridExampleComponent} from './examples/drag-and-drop-grid/drag-and-drop-grid.component';
import {SamDragAndDropGridModule} from '@sam-1994/ngx-drag-and-drop-grid';

@NgModule({
  declarations: [
    AppComponent,
    DragAndDropGridExampleComponent
  ],
  imports: [
    BrowserModule,
    SamDragAndDropGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
