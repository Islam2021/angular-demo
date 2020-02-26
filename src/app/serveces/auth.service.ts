import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fsAuth: AngularFireAuth) { }

  signUp(email: any, password: any) {
    this.fsAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  login() {}
  logout() {}
}
