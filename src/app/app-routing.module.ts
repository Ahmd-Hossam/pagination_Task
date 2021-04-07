import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StudentsGuardGuard } from './gaurds/students-guard.guard';




const routes: Routes = [
  { path: '', component: HomeComponent , canActivate:[StudentsGuardGuard] },//if it false student can not show it 
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
