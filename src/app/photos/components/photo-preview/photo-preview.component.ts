import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Photo } from '../../interfaces/Photo';

import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.scss']
})
export class PhotoPreviewComponent implements OnInit {
  photo!: Photo;
  photoId!: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly photosService: PhotosService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.photoId = params.photoId;
      this.photosService
        .getPhoto(this.photoId)
        .subscribe(response => (this.photo = response), console.error);
    });
  }

  deletePhoto(photoId: any): void {
    this.photosService
      .deletePhoto(photoId)
      .subscribe(res => this.router.navigate(['photos']), console.error);
  }

  updatePhoto(title: string, description: string): boolean {
    this.photosService
      .updatePhoto(this.photoId, title, description)
      .subscribe(() => this.router.navigate(['photos']), console.error);

    return false;
  }
}
