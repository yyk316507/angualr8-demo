import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent, HorizontalGridComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';

@NgModule({
    declarations: [
        GridItemDirective,
        GridItemImageDirective,
        GridItemTitleDirective,
        FooterComponent,
        HorizontalGridComponent
    ],
    imports: [ CommonModule ],
    exports: [
        GridItemDirective,
        GridItemImageDirective,
        GridItemTitleDirective,
        FooterComponent,
        HorizontalGridComponent
    ],
    providers: [],
})
export class SharedModule {}