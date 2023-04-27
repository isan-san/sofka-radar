import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { USER_ROLE } from '../Models/UserRol';

@Injectable({
  providedIn: 'root'
})
export class OperationsRolGuard implements CanActivate {

  constructor(private router: Router, private afAuth: AngularFireAuth, private db: AngularFireDatabase ) {}
  


  async canActivate(): Promise<boolean> {
    const user = await this.afAuth.currentUser;
    if (!user) {
      this.router.navigate(['/home']);
      return false;
    }
    const uid = user.uid;
    const roleSnapshot = await this.db.object(`users/${uid}/role`).query.once('value');
    const role = roleSnapshot.val();
    if (role !== USER_ROLE.OPERATION) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }  
}
