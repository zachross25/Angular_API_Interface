import {Component, OnInit, Self} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../services/users.service';
import {User} from '../users/User';
import {AlbumsService} from '../services/albums.service';
import {NgOnDestroy} from '../ngondestroy';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [ NgOnDestroy ]
})
export class UserDetailComponent implements OnInit {
  userId: string;
  user: User;
  userNotFound = false;

  constructor(@Self()
              private ngOnDestroy$: NgOnDestroy,
              private albumS: AlbumsService,
              private userService: UsersService,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(params => {
      this.userId = params.get('userId');

      this.userService.GetOneUser(this.userId)
        .pipe(takeUntil(this.ngOnDestroy$))
        .subscribe(
        user => {
          this.user = user;
        },
        error => {
          if (error.status === 404) {
            this.userNotFound = true;
          }
        });
   });
  }
}
