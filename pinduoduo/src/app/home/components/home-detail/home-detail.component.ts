
/* subscribe 是异步方法 */


import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  /* 变成数据流 Observable
    async  相当于在模板中做subscribe 也不用脏值检查markForCheck()
  */
  imageSliders$:Observable<ImageSlider[]>;
  channels$:Observable<Channel[]>;  
  selectedTabLink$:Observable<string>; 
  sub:Subscription; 
  constructor(
    private route: ActivatedRoute,
    private service:HomeService,
    private cd:ChangeDetectorRef
    ) { }
  
  handleClick(ev){
    console.log(ev)
  }
  ngOnInit() {
    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log("查询参数",params)
    })
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
      )
    this.channels$ = this.service.getChannels()
    this.imageSliders$ = this.service.getImageSliders()
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
