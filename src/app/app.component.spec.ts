import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DragAndDropGridExampleComponent} from './examples/drag-and-drop-grid/drag-and-drop-grid.component';
import {SamDragAndDropGridModule} from '@sam-1994/ngx-drag-and-drop-grid';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DragAndDropGridExampleComponent
      ],
      imports: [
        SamDragAndDropGridModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
