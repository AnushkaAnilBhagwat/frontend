import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  loggedIn = false;

  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.loggedIn = true;
    }
  }

  logOut() {
    this.loggedIn = false;
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
