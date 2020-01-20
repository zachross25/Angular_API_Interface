import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../objects/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() userId: number;
  @Input() userName: string;

  posts: Post[] = [];
  constructor(
    private postS: PostsService
  ) { }

  ngOnInit() {
    this.postS.GetPosts(String(this.userId)).subscribe(posts => this.posts = posts);
  }
}
