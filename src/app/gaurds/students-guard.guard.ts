import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsGuardGuard implements CanActivate {

  constructor(private auth_Ser:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      //Authantcation and Authrization code here 
      if(localStorage.getItem('access_token')){
        return true;
      }
      return false;
  }
  
}
