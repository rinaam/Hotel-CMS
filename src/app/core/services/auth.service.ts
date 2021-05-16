import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn$: Observable<boolean> = this.afAuth.user.pipe(map((user) => !!user));

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  emailSignup(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  logout(): void {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
