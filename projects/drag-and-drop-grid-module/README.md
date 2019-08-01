# @sam-1994/ngx-drag-and-drop-grid [![Build Status](https://travis-ci.com/sam-1994/ngx-drag-and-drop-grid.svg?branch=master)](https://travis-ci.com/sam-1994/ngx-drag-and-drop-grid)

A simple component for using the @angular/cdk drag and drop sort functions with a mixed orientation grid list

Currently the package is only tested in combination with Angular 8.x

## Table of Contents
* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [API](#api)


## Demo
https://sam-1994.github.io/ngx-drag-and-drop-grid/

## Installation

First you need to install the npm module:

```sh
npm install @sam-1994/ngx-drag-and-drop-grid --save
```

## Usage

#### 1. Import the `SamDragAndDropGridModule`:

Finally, you can use ngx-translate in your Angular project. You have to import `SamDragAndDropGridModule` in the NgModule.

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SamDragAndDropGridModule} from '@sam-1994/ngx-drag-and-drop-grid';

@NgModule({
    imports: [
        BrowserModule,
        SamDragAndDropGridModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2. Use the component:

```ts
import {Component, OnInit} from '@angular/core';
import {SamDragAndDropGridComponent} from 'drag-and-drop-grid-module';

@Component({
  selector: 'app-drag-and-drop-grid-example',
  templateUrl: './drag-and-drop-grid.component.html',
  styleUrls: ['./drag-and-drop-grid.component.sass']
})
export class SamDragAndDropGridExampleComponent implements OnInit {

  public list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  ngOnInit() {
  }
}
```

```html
<sam-drag-and-drop-grid [items]="list" [columnNumber]="5">
  <div *samDragAndDropListData="let listItem; let i=index">
    Item {{listItem}}; Index {{i}}
  </div>
</sam-drag-and-drop-grid>
```

## API

You can use the `samDragAndDropListData` directive to inject your custom template as grid items.
