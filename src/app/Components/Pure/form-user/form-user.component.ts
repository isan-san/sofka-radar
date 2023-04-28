import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent {
  userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    mail: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
  });
  role: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSave() {
    this.authService.register({
      name: this.userForm.value.name,
      email: this.userForm.value.mail,
      password: this.userForm.value.password,
      role: this.userForm.value.role,
    });
    this.router.navigate(['/users']);
  }
}
