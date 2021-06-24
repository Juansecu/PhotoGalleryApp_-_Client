import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Photo } from '../../interfaces/Photo';

import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos!: Photo[];

  constructor(
    private readonly router: Router,
    private readonly photosService: PhotosService
  ) {}

  ngOnInit(): void {
    this.photosService
      .getPhotos()
      .subscribe(res => (this.photos = res), console.error);
  }

  selectedCard(id: any): void {
    this.router.navigate(['photos', id]);
  }
}
