import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  // api = 'http://localhost:3000/customer/login'

 loginForm !: FormGroup

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb:FormBuilder,
    private authService : AuthService
    ) {}

    ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password:['',Validators.required]
      })
    }

    login(){
      console.log(this.loginForm.value);
      this.authService.loginService(this.loginForm.value).subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.token)
          this.router.navigate(['header']);
        },
        error: (error: any) => {
              console.log(error);
            }
      })


      // console.log(this.loginForm);
      // console.log("Value :"+this.loginForm.value);

      // this.http.post(this.api + 'login',this.loginForm.value).subscribe({
      //   next: (res: any) => {
      //     this.router.navigate(['header']);
      //   },
      //   error: (error: any) => {
      //     console.log(error);
      //   }
      // })
    }

    loginAdmin(){
      // this.http.post(this.api + 'admin',this.user).subscribe({
      //   next: (res: any) => {
      //     this.router.navigate(['header']);
      //   },
      //   error: (error: any) => {
      //     console.log(error);
      //   }
      // })
    }

}
