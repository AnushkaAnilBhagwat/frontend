import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  newUser = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    password: '',
    gender: ''
  }
  validate = {
    confirmPassword: ''
  }
  api = 'http://localhost:3000/customer/register'

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.newUser.gender);
  }

  register() {
    if (this.validate.confirmPassword === this.newUser.password) {
      this.http.post(this.api, this.newUser).subscribe({
        next: (res: any) => {
          this.router.navigate(['login']);
        },
        error: (error: any) => {
          console.error(error);
        }
      })
    }
    else{

    }
  }


}
