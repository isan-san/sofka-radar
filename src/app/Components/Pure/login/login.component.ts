import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { USER_ROLE } from 'src/app/Models/UserRol';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.loginForm = new FormGroup({
      email: this.emailFormControl,
      password: this.passwordFormControl,
    });
  }

  async onSubmit() {
    try {
      const credentials = await this.authService.login(this.loginForm.value);
      const uid = credentials.user.uid;
      const roleSnapshot = await this.db
        .object(`users/${uid}/role`)
        .query.once('value');
      const role = roleSnapshot.val().role;
      if (role === USER_ROLE.ADMIN) {
        this.router.navigate(['/users']);
      } else if (role === USER_ROLE.OPERATION) {
        this.router.navigate(['/radar']);
      } else if (role === USER_ROLE.COACH) {
        this.router.navigate(['/training']);
      }
    } catch (err) {
      if (err)
        this.passwordFormControl.setErrors(
          new Error('Invalid email or password')
        );
    }
  }
}
