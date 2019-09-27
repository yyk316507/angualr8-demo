import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TopMenu } from 'src/app/shared/components';


@Injectable({
    providedIn:"root"
})
export class HomeService {
  constructor(private http:HttpClient){}
  getTabs(){
    return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`)
  }
}