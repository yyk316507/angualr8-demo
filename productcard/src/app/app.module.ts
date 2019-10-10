import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ParamInterceptor, NotificationInterceptor } from './home/interceptors';
import { HomeModule } from './home';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
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
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
