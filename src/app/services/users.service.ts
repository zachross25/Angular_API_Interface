import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {User} from '../users/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  APIUrl = 'https://jsonplaceholder.typicode.com';
  constructor(
    private http: HttpClient
  ) { }

  public GetUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.APIUrl + '/users');
  }
}
