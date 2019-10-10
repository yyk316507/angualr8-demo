import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-drid',
  templateUrl: './vertical-drid.component.html',
  styleUrls: ['./vertical-drid.component.css']
})
export class VerticalDridComponent implements OnInit {
  @Input() itemWidth = "4rem";
  @Input() itemHeight = "4rem";
  @Input() gridGap = "5px";
  constructor() { }

  ngOnInit() {
  }
  get templateRows(){
    return `minmax(auto-fill,${this.itemHeight})`
  }
  get templateColumns(){
    return `repeat(auto-fill,minmax(${this.itemWidth},1fr))`
  }
}
