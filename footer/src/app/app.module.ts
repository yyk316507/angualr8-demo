import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { HomeModule } from './home/home.module';
import { RecommendModule } from './recommend/recommend.module';
import { MyModule } from './my/my.module';
import { ChatModule } from './chat/chat.module';
import { CategoryModule } from './category/category.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    CategoryModule,
    ChatModule,
    MyModule,
    AppRoutingModule,
    RecommendModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
