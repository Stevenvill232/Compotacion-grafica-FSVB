import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:5240/api/User';

  constructor(private http: HttpClient) {}

  registerUser(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/Register`, { username, password });
  }

  loginUser(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/Login`, { username, password });
  }
}
