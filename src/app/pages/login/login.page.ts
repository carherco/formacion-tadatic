import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

interface UserRegister {
  username: string;
  password: string;
  lastName: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: UserRegister = {
    username: '',
    password: '',
    lastName: ''
  };

  message: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    // localStorage.setItem('clave', 'valor');
    // let valorClave = localStorage.getItem('clave');
    // localStorage.removeItem('clave');
  }

  doLogin() {
    if (this.auth.login(this.user) ) {
      this.router.navigate(['/observables']);
    } else {
      this.message = this.auth.getLastLoginErrorMessage();
    }
  }

}
