import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../objects/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(
    private postS: PostsService
  ) { }

  ngOnInit() {
    this.postS.GetPosts().subscribe(posts => this.posts = posts);
  }
}
