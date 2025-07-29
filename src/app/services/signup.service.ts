import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  
  userCreate(user: any):Observable<any>{
    const url = JSON.parse(localStorage.getItem('setting'));
    return this.http.post(url + '/api/1.0.0/users', user);
  }

}
