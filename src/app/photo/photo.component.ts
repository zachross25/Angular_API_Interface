import {Component, Input, OnInit} from '@angular/core';
import {AlbumsService} from '../services/albums.service';
import {Photo} from '../objects/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() albumId: string;
  photos: Photo[] = [];

  constructor(
    private albumS: AlbumsService
  ) { }

  ngOnInit() {
    this.albumS.GetPhotos(this.albumId).subscribe(photos => this.photos = photos);
  }

}
