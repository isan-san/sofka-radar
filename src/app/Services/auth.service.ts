import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private afAuth: AngularFireAuth, private db: AngularFireDatabase) {}

  async register({name, email, password, role }: any) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    await this.db.object(`users/${userCredential.user.uid}/role`).set({name ,email , role});
    return userCredential
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}
