import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../domain';
import { environment } from 'src/environments/environment';

@Injectable({providedIn:'root'})
export class MyService {
    constructor(
        private http: HttpClient
    ){}
    getProfile(){
        return this.http.get<Profile>(`${environment.baseUrl}/profile`)
    }
}