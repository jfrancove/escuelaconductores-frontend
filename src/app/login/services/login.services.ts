import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../models/login.request';
import { LoginResponse } from '../models/login.response';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServices {
 
  url = `${environment.API_USER}/v1/auth`;
  private httpClient = inject(HttpClient);

  login(LoginRequest:LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.url}/login`,LoginRequest);
  }

}
