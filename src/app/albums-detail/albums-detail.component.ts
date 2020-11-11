import { Component, OnInit } from '@angular/core';
import {Album} from '../objects/album';
import {AlbumsService} from '../services/albums.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css']
})
export class AlbumsDetailComponent implements OnInit {
  album: Album;

  constructor(
    private route: ActivatedRoute,
    private albumS: AlbumsService
  ) { }

  ngOnInit() {
    const sub = this.route.paramMap.subscribe(params => {
      this.albumS.GetAlbum(params.get('albumId')).subscribe(album => {
        this.album = album;
        sub.unsubscribe();
      });
    });

  }

}
