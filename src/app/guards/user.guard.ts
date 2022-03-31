import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){

  }
  canActivate():boolean{
    if(this.authService.isUser()){
      return true
    }
    else{
      
      this.router.navigate(['./auth/login'])
      return false
    }
  }
  
}
