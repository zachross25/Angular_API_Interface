import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Comment } from '../objects/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  APIUrl = 'https://jsonplaceholder.typicode.com';
  constructor(
    private http: HttpClient
  ) { }

  GetComments(postId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.APIUrl + '/comments?postId=' + postId);
  }
}
