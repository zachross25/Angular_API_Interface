import {Component, OnInit, Self} from '@angular/core';
import { UsersService } from '../services/users.service';
import {User} from './User';
import {NgOnDestroy} from '../ngondestroy';
import {takeUntil} from 'rxjs/operators';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ NgOnDestroy ]
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(@Self()
              private ngOnDestroy$: NgOnDestroy,
              private usersService: UsersService
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    this.usersService.GetUsers()
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(users => {
        this.users = users;
      });
  }
}
