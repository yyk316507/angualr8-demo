import { Component,Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
// import { TopMenu } from '../../domain';
export interface TopMenu {
  title:string;
  link?:string;
  id:number
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
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
