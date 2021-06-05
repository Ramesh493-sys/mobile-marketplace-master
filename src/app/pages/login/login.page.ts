import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login:Login = {email:'', password:''};
  errorMessage:string = '';
  constructor(private authService:AuthenticationService,
    private router:Router) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.SignIn(email, password)
      .then((res) => {
        console.log(res);
        if(res.user && res.user.emailVerified) {
          console.log(res.user)
          this.authService.setUserLocal(res.user);
          
          this.router.navigate(['']);
          //this.router.navigate(['/tabs/tab1']);          
        } else {
          this.router.navigateByUrl('/register',);
          //window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        if(error.code == 'auth/user-not-found'){
          this.errorMessage = 'There is no user record corresponding to this email. Please try again.';
  
        }
        else if(error.code =='auth/wrong-password'){
          this.errorMessage = 'Invalid password. Please try again or request a new one via Forgot Password link.';
          
        }
        else{
          this.errorMessage = error.message;
        }
      })
  }

  onLogin(form:NgForm){
    if(form.valid){
      this.logIn(form.value.email, form.value.password);
    }
  }

  register() {
    this.router.navigate(['register']);
  }

}
