import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SamDragAndDropGridExampleComponent} from './examples/drag-and-drop-grid/drag-and-drop-grid.component';
import {SamDragAndDropGridModule} from 'drag-and-drop-grid-module';

@NgModule({
  declarations: [
    AppComponent,
    SamDragAndDropGridExampleComponent
  ],
  imports: [
    BrowserModule,
    SamDragAndDropGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
