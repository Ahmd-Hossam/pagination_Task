import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService} from '@auth0/angular-jwt'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  userinfo:BehaviorSubject<any> = new BehaviorSubject (null)
  jwtHelper= new JwtHelperService();

  constructor(private http:HttpClient, private router:Router, private toaster:ToastrService) { }
  
   
  Login(){
     const accessToken="Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJqb2huLmRvZSJ9.CuScq77_iCP4XsYGCMgGnQiATOmQwu_rR1LEB2Pcd_I";
     localStorage.setItem("access_token",  accessToken)

     //const decryptedUser= this.jwtHelper.decodeToken(accessToken)

     const data = {
       acesstoken: accessToken,
     }
     this.userinfo.next(data)
  }
 
  //Logout
  logout(){
    localStorage.removeItem('access_token')
    this.userinfo.next(null)
    this.router.navigate(['./login'])
    this.toaster.success("Logout successfuly", "Logout")
  }

  //get data 
  getdata(){
    return this.http.get<any>('https://randomuser.me/api/?results=500')
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

}



