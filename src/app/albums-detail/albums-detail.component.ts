import {Component, OnInit, Self} from '@angular/core';
import {Album} from '../objects/album';
import {AlbumsService} from '../services/albums.service';
import {ActivatedRoute} from '@angular/router';
import { NgOnDestroy } from '../ngondestroy';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css'],
  providers: [ NgOnDestroy ]
})
export class AlbumsDetailComponent implements OnInit {
  album: Album;

  constructor(@Self()
              private ngOnDestroy$: NgOnDestroy,
              private route: ActivatedRoute,
              private albumS: AlbumsService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(params => {
      this.albumS.GetAlbum(params.get('albumId'))
        .pipe(takeUntil(this.ngOnDestroy$))
        .subscribe(album => {
        this.album = album;
      });
    });

  }

}
