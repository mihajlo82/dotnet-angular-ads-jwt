import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private TOKEN_KEY = 'token';
  private apiUrl = 'https://localhost:32769/api/auth'; // prilagodi port
  constructor(private http: HttpClient) {}

  //  login(email: string, password: string) {
  //     return this.http.post<{ token: string }>(`${this.apiUrl}/login`, {
  //       email,
  //       password
  //     }).pipe(
  //       tap(res => {
  //         localStorage.setItem(this.TOKEN_KEY, res.token);
  //       })
  //     );
  //   }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
