import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent, HomeVariantDialogComponent } from './components';
import { HomeRoutingModule } from './home-routing.module';
import { DialogModule } from '../dialog/dialog.module';

@NgModule({
    declarations: [
        HomeContainerComponent,
        HomeVariantDialogComponent
    ],
    imports: [ 
        CommonModule,
        HomeRoutingModule,
        DialogModule
     ],
    exports: [],
    providers: [],
    entryComponents:[
        HomeVariantDialogComponent
    ]
})
export class HomeModule {}