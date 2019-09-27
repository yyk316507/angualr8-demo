import { AgoPipe } from './pipe/ago.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* 
  集合导入导出
*/
@NgModule({
  declarations: [
    AgoPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AgoPipe
  ]
})
export class SharedModule { }