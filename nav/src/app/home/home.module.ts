
import { NgModule } from '@angular/core';
import { HomeContainerComponent, HomeDetailComponent } from './components';
import { token } from './services';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        HomeContainerComponent,
        HomeDetailComponent
    ],
    providers: [
        {
            provide:token,
            useValue:'http://localhost.dev'}
    ],
    imports: [ 
        SharedModule,
        HomeRoutingModule,
    ],
})
export class HomeModule {}