import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../services/users.service';
import {User} from '../users/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId: string;
  user: User;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId');
      this.userService.GetOneUser(this.userId).subscribe(user => this.user = user);
    });
  }
}
