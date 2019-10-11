
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './components';

const routes: Routes = [
    {
        path:'products',
        children:[
            {
                path:':productId',
                component:ProductContainerComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
