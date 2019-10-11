
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TagDirective, AvatarDirective } from './directives';
import { ProductTileComponent } from './components/product-tile';
import { VerticalGridComponent } from './components/vertical-grid';

@NgModule({
    declarations: [
        ProductTileComponent,
        VerticalGridComponent,
        TagDirective,
        AvatarDirective
    ],
    imports: [ CommonModule ],
    exports: [
        CommonModule,
        FormsModule,
        ProductTileComponent,
        VerticalGridComponent,
        TagDirective,
        AvatarDirective
    ],
    providers: [],
})
export class SharedModule {}