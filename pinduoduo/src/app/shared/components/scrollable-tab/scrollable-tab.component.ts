import { Component, Input,Output,EventEmitter, ChangeDetectionStrategy} from '@angular/core';
export interface TopMenu {
  title:string;
  link?:string;
  id:number
}
@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
/* 
接口是可选的，也就是说只要有类似  ngOnInit 这样的方法
生病周期的钩子函数还是正常执行
但建议实现接口，好处一个是不会由于误删除某个钩子函数
另一个是对组件涉及到哪些生命周期一目了然
*/
export class ScrollableTabComponent{
  //刷新选中还是这个
  @Input() selectedTabLink:string;
  @Input() menu : TopMenu[] = [];
  @Input() backgroundColor = "#fff" ; 
  @Input() titleActiveColor = "red";
  @Input() titleColor = "blue";
  @Input() indicatorColor = 'brown';
  @Output() tabSelected = new EventEmitter();
  /* 
  构造函数永远首先被调用
  */
  constructor() {}
  handleSelection(index : number){
    this.tabSelected.emit(this.menu[index])
  }
}
