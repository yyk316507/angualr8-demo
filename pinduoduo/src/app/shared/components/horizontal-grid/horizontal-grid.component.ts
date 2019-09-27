import { Component, OnInit,Output,Input, ChangeDetectionStrategy} from '@angular/core';
export interface Channel {
  id: number;
  icon: string ;
  title: string;
  link: string;
}
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HorizontalGridComponent implements OnInit {
  constructor() { }
  /* 一排显示多少个 */
  @Input() cols =8;
  /* 一屏幕显示多少个 */
  @Input() displayCols =5;
  sliderMargin = '0'
  ngOnInit() {
  }
  
  public get scrollable() : boolean {
    return this.cols > this.displayCols
  }
  
  public get templateRows() : string {
    return `minmax(auto,max-content)`
  }
 
 public get templateColumns() : string {
   return `repeat(${this.cols},calc((100vw - ${this.displayCols*0.4}rem)/${this.displayCols}))`
 }
 handleScroll(ev){
  this.sliderMargin = `0 ${100*ev.target.scrollLeft /ev.target.scrollWidth}%`
 }
}
