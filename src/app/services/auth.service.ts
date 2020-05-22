import { Injectable } from '@angular/core';

interface UserCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username: string;
  private token: string;
  private lastLoginErrorMessage: string;

  constructor() {}

  login(user: UserCredentials): boolean {
    if (user.username === 'curso' && user.password === 'ionic') {
      this.username = user.username;
      this.token = 'token_de_sesion';
      return true;
    } else {
      this.lastLoginErrorMessage = 'Credenciales incorrectas';
      return false;
    }
  }

  logout() {
    return true;
  }

  isLogged(): boolean {
    if (this.username) {
      return true;
    } else {
      return false;
    }
  }

  getUsername(): string {
    return this.username;
  }

  getToken(): string {
    return this.token;
  }

  getLastLoginErrorMessage(): string {
    return this.lastLoginErrorMessage;
  }

}
