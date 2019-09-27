import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HorizontalGridComponent } from './components';
import {appGridItemDirective,appGridItemImageDirective,appGridItemTitleDirective} from './directives'

/* 
  集合导入导出
*/
@NgModule({
  declarations: [
    HorizontalGridComponent,
    appGridItemDirective,
    appGridItemImageDirective,
    appGridItemTitleDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    HorizontalGridComponent,
    appGridItemDirective,
    appGridItemImageDirective,
    appGridItemTitleDirective
  ]
})
export class SharedModule { }