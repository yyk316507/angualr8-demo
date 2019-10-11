import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product, Ad } from 'src/app/shared/domain';

@Injectable({
    providedIn:'root'
})
export class HomeService {
  constructor(private http:HttpClient){}
    getAds(tab:string){
        return this.http.get<Ad[]>(`${environment.baseUrl}/ads`,{params:{categories_like:tab}})
    }
    getProductsByTab(tab:string){
        return this.http.get<Product[]>(`${environment.baseUrl}/products`,{params:{categories_like:tab}})
    }
}