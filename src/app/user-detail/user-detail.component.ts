import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../services/users.service';
import {User} from '../users/User';
import {AlbumsService} from '../services/albums.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId: string;
  user: User;
  userNotFound = false;

  constructor(
    private albumS: AlbumsService,
    private userService: UsersService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const s1 = this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId');

      const s2 = this.userService.GetOneUser(this.userId).subscribe(
        user => {
          this.user = user;
          s2.unsubscribe();
          s1.unsubscribe();
        },
        error => {
          console.log(error);
          if (error.status === 404) {
            this.userNotFound = true;
          }
        });

   });
  }
}
