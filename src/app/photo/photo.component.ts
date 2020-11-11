import {Component, Input, OnInit, Self} from '@angular/core';
import {AlbumsService} from '../services/albums.service';
import {Photo} from '../objects/photo';
import {NgOnDestroy} from '../ngondestroy';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [ NgOnDestroy ]
})
export class PhotoComponent implements OnInit {
  @Input() albumId: number;
  photos: Photo[] = [];

  constructor(@Self()
              private ngOnDestroy$: NgOnDestroy,
              private albumS: AlbumsService
  ) { }

  ngOnInit() {
    this.albumS.GetPhotos(String(this.albumId))
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(photos => this.photos = photos);
  }
}
