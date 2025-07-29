import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>({
    id: 0,
    username: '',
    password: ''
  });

  constructor(private http: HttpClient) {
    const storedData = localStorage.getItem('auth');
    if (storedData) {
      try {
        this.user.next(JSON.parse(storedData));
      } catch (error) {}
    }
    this.user.subscribe((data) => {
      localStorage.setItem('auth', JSON.stringify(data));
    });
  }

  login(username: string, password: string) {
    const url = JSON.parse(localStorage.getItem('setting'));
    const body = { username, password };
    return this.http
      .post<any>(url + '/api/1.0.0/auth', body)
      .pipe(tap((data) => this.user.next(data.user)));
  }

  logout() {
    const url = JSON.parse(localStorage.getItem('setting'));
    return this.http.post(url + '/api/1.0.0/logout', {}).pipe(
      tap({
        finalize: () =>
          this.user.next({
            id: 0,
            username: '',
            password: '',
          }),
      })
    );
  }
}
