
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeContainerComponent,
  HomeDetailComponent,
} from './components'
import { token } from './services';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent
  ],
  providers:[
    {provide:token,useValue:'http://localhost.dev'}
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
