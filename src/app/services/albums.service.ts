import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from '../objects/album';
import {Photo} from '../objects/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  APIUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  GetAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.APIUrl + '/albums');
  }
  GetAlbum(albumId: string): Observable<Album> {
    return this.http.get<Album>(this.APIUrl + '/albums/' + albumId);
  }
  GetPhotos(albumId: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.APIUrl + '/photos?albumId=' + albumId);
  }
}
