import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentsService} from '../services/comments.service';
import {ActivatedRoute} from '@angular/router';
import { Comment } from '../objects/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() postId: string;
  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private commS: CommentsService
  ) { }

  ngOnInit() {
    this.commS.GetComments(this.postId).subscribe(comments => this.comments =  comments);
  }

}
