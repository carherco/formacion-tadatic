import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    username: '',
    password: '',
  };

  message: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    if (this.auth.login(this.user) ) {
      this.router.navigate(['/observables']);
    } else {
      this.message = this.auth.getLastLoginErrorMessage();
    }
  }

}
