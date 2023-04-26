import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: this.emailFormControl,
      password: this.passwordFormControl,
    });
  }

  onSubmit() {
    this.authService
      .login(this.loginForm.value)
      .then((response) => {
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        if (err)
          this.passwordFormControl.setErrors(
            new Error('Invalid email or password')
          );
      });
  }
}
