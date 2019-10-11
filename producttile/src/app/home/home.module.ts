import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './components';
import { token } from './services';

@NgModule({
    declarations: [
        HomeContainerComponent
    ],
    imports: [ 
        SharedModule,
        HomeRoutingModule
    ],
    exports: [],
    providers: [
        {provide:token,useValue:'http://localhost.dev'}
    ],
})
export class HomeModule {}