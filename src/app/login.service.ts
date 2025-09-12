import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
apiUrl:string=environment.loginUrl;
  constructor(private _httpClient:HttpClient) { }

  login(data:any):Observable<any>{
    return this._httpClient.post(this.apiUrl,data);
  }
}
