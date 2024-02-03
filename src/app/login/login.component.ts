import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  api = ''

  user = {
    email: '',
    password: ''
  }

  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

    login(){
      this.http.post(this.api,this.user).subscribe({
        next: (res: any) => {
          this.router.navigate(['home']);
        },
        error: (error: any) => {
          console.log(error);
        }
      })
    }

}
