import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { getAuth } from 'firebase/auth';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  users$: Observable<any[]>;

  auth = getAuth();

  constructor(private db: AngularFireDatabase) {
    this.users$ = this.db.list('/users').valueChanges();
  }
}
