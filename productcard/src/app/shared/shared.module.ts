
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TagDirective, AvatarDirective } from './directives';
import { ProductCardComponent,VerticalGridComponent,BackButtonComponent } from './components';

@NgModule({
    declarations: [
        ProductCardComponent,
        VerticalGridComponent,
        BackButtonComponent,
        TagDirective,
        AvatarDirective
    ],
    imports: [ CommonModule ],
    exports: [
        CommonModule,
        FormsModule,
        ProductCardComponent,
        VerticalGridComponent,
        BackButtonComponent,
        TagDirective,
        AvatarDirective
    ],
    providers: [],
})
export class SharedModule {}