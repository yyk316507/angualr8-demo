import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ParamInterceptor, NotificationInterceptor } from './home/interceptors';
import { HomeModule } from './home';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh-Hans';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SharedModule,
    AppRoutingModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(localeZh, 'zh');
  }
}
