
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CountDownComponent } from './components';

@NgModule({
    declarations: [
        CountDownComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule
     ],
    exports: [
        CommonModule,
        FormsModule,
        CountDownComponent
    ],
    providers: [],
})
export class shareModule {}