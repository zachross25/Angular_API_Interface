import {Component, Input, OnInit, Self} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../objects/post';
import {NgOnDestroy} from '../ngondestroy';
import {take, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [ NgOnDestroy ]
})
export class PostsComponent implements OnInit {
  @Input() userId: number;
  @Input() userName: string;

  posts: Post[] = [];
  constructor(@Self()
              private ngOnDestroy$: NgOnDestroy,
              private postS: PostsService
  ) { }

  ngOnInit() {
    this.postS.GetPosts(String(this.userId))
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(posts => {
        this.posts = posts;
      });
  }
}
