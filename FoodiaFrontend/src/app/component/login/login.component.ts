import { Component } from '@angular/core';
import { Credentials } from '../../model/credentials';
import { LoginService } from '../../service/login-service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  creds: Credentials= {
    username: "",
    password: ""
 }
 constructor(private loginService: LoginService,
             private router: Router){};

 getRecipes(form: NgForm){
   console.log('Form Value:',form.value);
   return this.loginService.login(this.creds)
                           .subscribe(response => {
                           this.router.navigate(['/recipe']);
                           })
 }

 login(form: NgForm){
   console.log('form value', form.value);
    this.loginService.login(this.creds)
     .subscribe(response => {
       this.router.navigate(['/recipe']);
     });
 }


}
