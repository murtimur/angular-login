import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  getOzelKodlar():Observable<any> {
    const url = JSON.parse(localStorage.getItem('setting'));
    return this.http.get(url + '/api/1.0.0/ozelkodlar');
  }

  getKasalar(): Observable<any> {
    const url = JSON.parse(localStorage.getItem('setting'));
    return this.http.get(url + '/api/1.0.0/kasalar');
  }

  getSubeler(): Observable<any> {
    const url = JSON.parse(localStorage.getItem('setting'));
    return this.http.get(url + '/api/1.0.0/subeler');
  }

  getAllWinkaKullanicilari(): Observable<any> {
    const url = JSON.parse(localStorage.getItem('setting'));
    return this.http.get(url + '/api/1.0.0/kullanicilar');
  }

  getAllWindowsYazicilari(): Observable<any> {
    const url = JSON.parse(localStorage.getItem('setting'));
    return this.http.get(url + '/api/1.0.0/yazicilar');
  }

  getAllPersoneller():Observable<any> {
    const url = JSON.parse(localStorage.getItem('setting'));
    return this.http.get(url + '/api/1.0.0/personeller');
  }

  userCreate(user: any):Observable<any>{
    const url = JSON.parse(localStorage.getItem('setting'));
    return this.http.post(url + '/api/1.0.0/users', user);
  }

  getFiyatTipleri():Observable<any> {
    const url = JSON.parse(localStorage.getItem('setting'));
    return this.http.get(url + '/api/1.0.4/fiyatadlari');
  }

}
