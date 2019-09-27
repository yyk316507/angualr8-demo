import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import {takeWhile, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  countDown$:Observable<string>;
  @Input() startDate:Date;
  @Input() endDate:Date;
  private _MS_PRE_SECOND = 1000;
  constructor() { }
  ngOnInit() {
    this.countDown$ = this.getCountDownObservable(this.startDate,this.endDate)
  }
  private getCountDownObservable = (startDate:Date,endDate:Date) =>{
    return interval(1000).pipe(
      map(elapse => this.diffInSec(startDate,endDate) - elapse),
      takeWhile(gap => gap >= 0),
      map(sec => ({
        day:Math.floor(sec / 3600 /24),
        hour:Math.floor((sec / 3600 ) % 24),
        minute:Math.floor((sec / 60)  % 60),
        second:Math.floor((sec % 60))
        })
      ),
      tap(val => console.log(val)),
      map(({day,hour,minute,second}) => `${day}天:${hour}小时:${minute}分钟:${second}秒`)
    )
  }
  private diffInSec = (start:Date,end:Date):number => {
    const diff  = end.getTime() - start.getTime();
    return Math.floor(diff / this._MS_PRE_SECOND)
  }
}
