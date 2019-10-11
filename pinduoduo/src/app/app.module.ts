import { ProductModule } from './product/product.module';
import { RecommendModule } from './recommend/recommend.module';
import { MyModule } from './my/my.module';
import { ChatModule } from './chat/chat.module';
import { CategoryModule } from './category/category.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { NotificationInterceptor } from './home/interceptors/notification.interceptor';
import { ParamInterceptor } from './home/interceptors/param.interceptor';

import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import localeZh from '@angular/common/locales/zh-Hans';
import { registerLocaleData } from '@angular/common';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      SharedModule,
      AppRoutingModule,
      HomeModule,
      CategoryModule,
      ChatModule,
      MyModule,
      RecommendModule,
      ProductModule,
      HttpClientModule
   ],
   providers: [
      {
         provide:HTTP_INTERCEPTORS,
         useClass:ParamInterceptor,
         multi:true
      },
      {
         provide:HTTP_INTERCEPTORS,
         useClass:NotificationInterceptor,
         multi:true
      },
      { 
         provide: LOCALE_ID,
         useValue: 'zh-Hans'
      }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { 
   constructor() {
      registerLocaleData(localeZh, 'zh');
    }
}
