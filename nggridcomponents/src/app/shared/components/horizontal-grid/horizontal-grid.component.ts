import { Component, OnInit,Output,Input} from '@angular/core';
export interface Channels {
  id: number;
  icon: string ;
  title: string;
  link: string;
}
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  /* 一行显示的个数 */
  @Input() cols ;
  /* 一屏幕显示的个数 */
  @Input() displayCols ;
  sliderMargin = '0';
  constructor() { }
  ngOnInit() {
  }
  /* 如果一行显示的超过了定义的个数就可以滚动 */
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
    this.sliderMargin = `0 ${100*ev.target.scrollLeft / ev.target.scrollWidth}%`
  }
}
