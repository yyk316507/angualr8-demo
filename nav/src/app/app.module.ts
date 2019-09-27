
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParamInterceptor, NotificationInterceptor } from './home/interceptors';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HomeModule,
      SharedModule,
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
      }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
