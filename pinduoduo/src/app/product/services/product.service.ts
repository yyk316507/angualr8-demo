import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductVariant } from '../domain';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})
export class productService {
    constructor(private http:HttpClient){}
    getProductVariantsByProductId(productId:string){
        return this.http.get<ProductVariant[]>(`${environment.baseUrl}/productVariants`,
        {
            params:{
                _expand:'product',
                _embed:'productVariantImages',
                productId:productId
            }
        })
    }
}