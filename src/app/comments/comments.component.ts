import {Component, Input, OnInit, Self} from '@angular/core';
import {CommentsService} from '../services/comments.service';
import {ActivatedRoute} from '@angular/router';
import { Comment } from '../objects/comment';
import {NgOnDestroy} from '../ngondestroy';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [ NgOnDestroy ]
})
export class CommentsComponent implements OnInit {
  @Input() postId: number;
  comments: Comment[] = [];

  constructor(@Self()
              private ngOnDestroy$: NgOnDestroy,
              private route: ActivatedRoute,
              private commS: CommentsService
  ) { }

  ngOnInit() {
      this.commS.GetComments(String(this.postId))
        .pipe(takeUntil(this.ngOnDestroy$))
        .subscribe(comments => this.comments =  comments);
  }
}
