import { Component, OnInit } from '@angular/core';
import {Photo} from '../objects/photo';
import {Album} from '../objects/album';
import {HttpClient} from '@angular/common/http';
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
    this.route.paramMap.subscribe(params => {
      this.albumS.GetAlbum(params.get('albumId')).subscribe(album => {
        this.album = album;
      });
    });

  }

}
