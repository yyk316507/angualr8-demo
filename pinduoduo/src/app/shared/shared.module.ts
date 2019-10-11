
import { AgoPipe } from './pipes/ago.pipe';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ScrollableTabComponent, 
  ImageSliderComponent, 
  HorizontalGridComponent,
  CountDownComponent,
  FooterComponent, 
  VerticalDridComponent,
  ProductCardComponent, 
  ProductTileComponent,
  BackButtonComponent} from './components';
import { 
  GridItemDirective,
  GridItemTitleDirective,
  GridItemImageDirective,
  TagDirective,
  AvatarDirective} from  './directives'

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
    VerticalDridComponent,
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
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
    VerticalDridComponent,
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe
  ]
})
export class SharedModule { }
