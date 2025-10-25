import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServices } from '../../services/login.services';
import { LoginRequest } from '../../models/login.request';
import { LoginResponse } from '../../models/login.response';


@Component({
  selector: 'app-login.component',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  private router = inject(Router)
  private formBuilder = inject(FormBuilder);
  private loginService = inject(LoginServices)

  public loginForm = this.formBuilder.group({
    email: ['maria@mail.com', [Validators.required]],
    password: ['12345',[Validators.required]],
  });

  // email: john@mail.com
  // password:changeme

  login() {

    console.log('login...')

    const loginRequest: LoginRequest = new LoginRequest(
      this.loginForm.controls['email'].value || '',
      this.loginForm.controls['password'].value || ''
    )

    console.log(loginRequest)

    this.loginService.login(loginRequest).subscribe({
      next:(res:LoginResponse) =>{
          console.log("respueta" + res)
          this.router.navigate(['home'])
          sessionStorage.setItem('access_token',res.access_token)
          sessionStorage.setItem('refresh_token',res.refresh_token)
      },
      error(err) {

      },
    })

  }
}