
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { TabItem } from './shared/domain/index';
import { Component} from '@angular/core';
import { map,filter } from 'rxjs/operators';
import { DialogService } from './dialog/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedIndex$:Observable<number>;
  constructor(
    private router:Router,
    private dialogService:DialogService
    ){}
  ngOnInit(): void {
    /* router.events  检测路由变化
      NavigationStart：导航开始
      NavigationEnd：导航结束
      NavigationCancel：取消导航
      NavigationError：导航出错
    */
    this.selectedIndex$ = this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd),
      map((ev: NavigationEnd) => {
        const arr = ev.url.split('/');
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map(tab => this.getSelectedIndex(tab))
    );
  }
  getSelectedIndex(tab:string){
    return tab === 'recommend'
    ? 1 : tab === 'category' 
    ? 2 : tab === 'chat' 
    ? 3 : tab === 'my' 
    ? 4 :0
  }
  handleTabSelect(tab:TabItem){
    this.router.navigate([tab.link]);
  }
  removeDialog(){
    this.dialogService.close()
  }
}
