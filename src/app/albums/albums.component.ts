import { Component, Input, OnInit, Self } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { Album } from '../objects/album';
import { NgOnDestroy } from '../ngondestroy';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [ NgOnDestroy ]
})
export class AlbumsComponent implements OnInit {
  @Input() userId: number;
  @Input() userName: string;

  albums: Album[] = [];

  constructor(@Self()
              private ngOnDestroy$: NgOnDestroy,
              private albumS: AlbumsService
  ) { }

  ngOnInit() {
    this.albumS.GetAlbums(String(this.userId))
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(albums => {
          this.albums = albums;
    });
  }

}
