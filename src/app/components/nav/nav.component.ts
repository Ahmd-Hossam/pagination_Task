import { Component, OnInit } from '@angular/core';
import { StudentsGuardGuard } from 'src/app/gaurds/students-guard.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  isLoggedIn:boolean=true

  constructor(private auth_Ser:AuthService, private guard:StudentsGuardGuard) { }

  ngOnInit(): void {
    this.isLoggedIn=!!localStorage.getItem('access_token')
  }


  logout(){
    this.auth_Ser.logout();
  }

}
