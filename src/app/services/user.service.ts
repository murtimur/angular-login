import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    const url = JSON.parse(localStorage.getItem('setting'));
    return this.http.get(url + '/api/1.0.0/users');
  }

  getUser(username: string):Observable<any> {
    const url = JSON.parse(localStorage.getItem('setting'));
    return this.http.get(url + `/api/1.0.0/user/${username}`);
  }

  userUpdate(user: any):Observable<any> {
    const url = JSON.parse(localStorage.getItem('setting'));
    return this.http.post(url + '/api/1.0.0/userupdate',user);
  }

  userDelete(id: number):Observable<any> {
    const url = JSON.parse(localStorage.getItem('setting'));
    return this.http.delete(url + `/api/1.0.0/userdelete/${id}`);
  }

}
