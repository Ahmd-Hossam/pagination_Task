import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myform!:FormGroup;
  submited:boolean=false
  

  constructor(private fb:FormBuilder, private auth_Ser:AuthService, private router:Router, private toaster:ToastrService) { }


  ngOnInit(): void {
    this.build()
  }
 
  
  build(){
    this.myform=this.fb.group({
      email:[null, Validators.required],
      password:[null, Validators.required]
    })
  }

  login(){
    this.submited=true
    if(this.myform.invalid){//if it invalid return false
         this.toaster.error("form invald", "Error")
         return
    }
    this.auth_Ser.Login()
    this.router.navigate([''])
    this.toaster.success('Login successfuly ', 'succssful')
  }
  
  get f (){
    return this.myform.controls
  }
  
}
