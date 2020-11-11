import {Component, Input, OnInit} from '@angular/core';
import {AlbumsService} from '../services/albums.service';
import {Album} from '../objects/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  @Input() userId: number;
  @Input() userName: string;

  albums: Album[] = [];
  constructor(
    private albumS: AlbumsService
  ) { }

  ngOnInit() {
    const sub = this.albumS.GetAlbums(String(this.userId)).subscribe(albums => {
      this.albums = albums;
      sub.unsubscribe();
    });
  }

}
