import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/shared/domain';

@Injectable({
    providedIn:'root'
})
export class HomeService {
  constructor(private http:HttpClient){}
    getProductsByTab(tab:string){
        return this.http.get<Product[]>(`${environment.baseUrl}/products`,{params:{categories_like:tab}})
    }
}