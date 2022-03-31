import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResponseAuth } from '../../models/BodyResponses';
import { Response } from '../../models/Response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,private router:Router) { }

  login(user){
    
    return this.httpClient.post<ResponseAuth>(`${environment.url_api}/Auth/login`, user)
    
  }
  errorHandler(error){
    return throwError(error.error.body || 'Server Error')
  }

  isLogged():Boolean{
    return !!localStorage.getItem('token')
  }

  isUser():Boolean{
    if(localStorage.getItem('role')==='User') return true
    else return false
  }
  isAdmin():Boolean{
    if(localStorage.getItem('role')==='admin') return true
    else return false
  }
  logOut(){
    localStorage.removeItem('role');
    this.router.navigate(['/home']);
  }

  getToken(){
    if(!localStorage.getItem('token')) localStorage.setItem('token','')
    return localStorage.getItem('token')
  }
}
