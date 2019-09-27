import { Component } from '@angular/core';
import { Channels } from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '多个图文滚动';
  col = "6";
  displayCol = "5";
  channels:Channels[]=[
    {
      id:1,
      icon:'../assets/images/banner1.jpg',
      title:'限时秒杀',
      link:''
    },
    {
      id:2,
      icon:'../assets/images/banner1.jpg',
      title:'断码清仓',
      link:''
    },
    {
      id:3,
      icon:'../assets/images/anquan_type.png',
      title:'断码清仓',
      link:''
    },
    {
      id:4,
      icon:'../assets/images/home_bg_1.png',
      title:'断码清仓',
      link:''
    },
    {
      id:5,
      icon:'../assets/images/home_bg_2.png',
      title:'断码清仓',
      link:''
    },
    {
      id:6,
      icon:'../assets/images/home_bg_3.png',
      title:'断码清仓',
      link:''
    },
    {
      id:7,
      icon:'../assets/images/home-bgImg-2.png',
      title:'断码清仓',
      link:''
    },
    {
      id:8,
      icon:'../assets/images/home-bgImg-3.png',
      title:'断码清仓',
      link:''
    },
    {
      id:9,
      icon:'../assets/images/home-bgImg-4.png',
      title:'断码清仓',
      link:''
    },
    {
      id:10,
      icon:'../assets/images/renzheng-img1.jpg',
      title:'断码清仓',
      link:''
    },
    {
      id:11,
      icon:'../assets/images/shiming2.png',
      title:'断码清仓',
      link:''
    }
  ]
  handleClick(ev){
    console.log(ev)
  }
}
