import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from '../services/comments.service';
import {ActivatedRoute} from '@angular/router';
import { Comment } from '../objects/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() postId: number;
  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private commS: CommentsService
  ) { }

  ngOnInit() {
    const commentsSubscription = this.commS.GetComments(String(this.postId)).
      subscribe(comments => {
        this.comments =  comments;
        commentsSubscription.unsubscribe();
      });
  }

}
