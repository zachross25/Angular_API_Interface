import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../objects/post';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../services/users.service';
import {User} from '../users/User';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit {
  post: Post;
  user: User;

  constructor(
    private userS: UsersService,
    private route: ActivatedRoute,
    private postS: PostsService
  ) { }

  ngOnInit() {
    const sub = this.route.paramMap.subscribe(params => {
      this.postS.GetPost(params.get('postId')).subscribe(post => {
        this.post = post;
        this.userS.GetOneUser(String(post.userId)).subscribe(user => this.user = user);
        sub.unsubscribe();
      });
    });
  }

}
