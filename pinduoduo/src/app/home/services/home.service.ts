import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopMenu,Channel } from 'src/app/shared/components';
import { environment } from 'src/environments/environment';
import { Ad, Product, ImageSlider } from 'src/app/shared/domain';

@Injectable({
    providedIn:'root'
})
export class HomeService {
  constructor(private http:HttpClient){}
    getTabs(){
        return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`)
    }
    getChannels(){
        return this.http.get<Channel[]>(`${environment.baseUrl}/channels`)
    }
    getImageSliders(){
        return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`)
    }
    getAds(tab:string){
        return this.http.get<Ad[]>(`${environment.baseUrl}/ads`,{params:{categories_like:tab}})
    }
    getProductsByTab(tab:string){
        return this.http.get<Product[]>(`${environment.baseUrl}/products`,{params:{categories_like:tab}})
    }
}