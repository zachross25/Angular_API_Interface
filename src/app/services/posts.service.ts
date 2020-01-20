import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../objects/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  APIUrl = 'https://jsonplaceholder.typicode.com';
  constructor(
    private http: HttpClient
  ) { }
  GetPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.APIUrl + '/posts');
  }
  GetPost(id: string): Observable<Post> {
    return this.http.get<Post>(this.APIUrl + '/posts' + '/' + id);
  }
}
