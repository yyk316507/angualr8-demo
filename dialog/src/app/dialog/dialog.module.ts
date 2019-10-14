import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components';
import { CloseDialogDirective } from './directives';

@NgModule({
    declarations: [
        DialogComponent,
        CloseDialogDirective
    ],
    imports: [ CommonModule ],
    exports: [
        DialogComponent,
        CloseDialogDirective
    ],
    providers: [],
})
export class DialogModule {}