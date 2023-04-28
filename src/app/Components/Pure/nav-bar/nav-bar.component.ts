import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isSession: boolean;

  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router,
  ) {
    this.isSession = false;
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((user: any) => {
      this.isSession = !!user;
    });
  }

  logOut() {
    this.authService
      .logout()
      .then(() => this.router.navigate(['/home']))
      .catch((err: any) => console.error(err));
  }

}
