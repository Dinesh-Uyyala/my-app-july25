import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient:HttpClient) { }

  login(data:any):Observable<any>{
    return this._httpClient.post('https://login-1-nkji.onrender.com/login',data);
  }
}
