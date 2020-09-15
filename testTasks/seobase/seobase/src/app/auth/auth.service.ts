import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  login(user) {
    console.log(user);
    this.router.navigate(['/dashboard']);
  }
}
