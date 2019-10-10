
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TagDirective, AvatarDirective } from './directives';
import { ProductCardComponent } from './components/product-card';
import { VerticalGridComponent } from './components/vertical-grid';

@NgModule({
    declarations: [
        ProductCardComponent,
        VerticalGridComponent,
        TagDirective,
        AvatarDirective
    ],
    imports: [ CommonModule ],
    exports: [
        CommonModule,
        FormsModule,
        ProductCardComponent,
        VerticalGridComponent,
        TagDirective,
        AvatarDirective
    ],
    providers: [],
})
export class SharedModule {}