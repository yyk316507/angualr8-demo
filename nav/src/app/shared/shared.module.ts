import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components';

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [ CommonModule ],
    exports: [
        CommonModule,
        NavBarComponent
    ],
    providers: [],
})
export class SharedModule {}