import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductContainerComponent } from './components';

@NgModule({
    declarations: [
        ProductContainerComponent
    ],
    imports: [ 
        CommonModule,
        SharedModule,
        ProductRoutingModule
     ],
    exports: [],
    providers: [],
})
export class ProductModule {}