import {Component, OnInit, Self} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../objects/post';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../services/users.service';
import {User} from '../users/User';
import {NgOnDestroy} from '../ngondestroy';
import {take, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css'],
  providers: [ NgOnDestroy ]
})
export class PostsDetailComponent implements OnInit {
  post: Post;
  user: User;

  constructor(@Self()
              private ngOnDestroy$: NgOnDestroy,
              private userS: UsersService,
              private route: ActivatedRoute,
              private postS: PostsService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(params => {
      this.postS.GetPost(params.get('postId'))
        .pipe(takeUntil(this.ngOnDestroy$))
        .subscribe(post => {
          this.post = post;
          this.userS.GetOneUser(String(post.userId)).subscribe(user => this.user = user);
      });
    });
  }

}
