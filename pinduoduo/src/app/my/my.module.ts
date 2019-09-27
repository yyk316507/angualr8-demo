import { MyContainerComponent } from './components';
import { NgModule } from '@angular/core';

import { MyRoutingModule } from './my-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MyContainerComponent
  ],
  imports: [
    SharedModule,
    MyRoutingModule
  ]
})
export class MyModule { }
