import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: any):Observable<any>{
    console.log("I am server")
    return this.http.get('http://localhost:3000/users',data)
  }

}
