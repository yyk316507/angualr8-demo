
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    
];

@NgModule({
    /* 
        跟路由使用RouterModule.forRoot(routes) 形式
        而功能模块中的路由模块使用  outerModule.forChild(routes)  形式
        启用路由的  debug 跟踪模式，需要在跟模块中设置  enableTracing:true
    */
    imports: [RouterModule.forRoot(routes,{enableTracing:true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
