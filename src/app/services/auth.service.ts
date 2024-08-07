import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser!: any;

  constructor(private auth: Auth) {}

  async login() {
    const credential = await signInWithPopup(
      this.auth,
      new GoogleAuthProvider(),
    );
    this.currentUser = credential.user;
    console.log(credential);
  }

  async logout() {
    await this.auth.signOut();
    this.currentUser = null;
  }
}
