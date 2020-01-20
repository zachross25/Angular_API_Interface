import { Component, OnInit } from '@angular/core';
import {AlbumsService} from '../services/albums.service';
import {Album} from '../objects/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  constructor(
    private albumS: AlbumsService
  ) { }

  ngOnInit() {
    this.albumS.GetAlbums().subscribe(albums => this.albums = albums);
  }

}
