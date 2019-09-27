
import { AgoPipe } from './pipes/ago.pipe';
import { GridItemTitleDirective } from './directives/grid-item-title.directive';
import { GridItemImageDirective } from './directives/grid-item-image.directive';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent,CountDownComponent,FooterComponent } from './components';
import { GridItemDirective} from  './directives'

/* 
  集合导入导出
*/
@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe
  ]
})
export class SharedModule { }
