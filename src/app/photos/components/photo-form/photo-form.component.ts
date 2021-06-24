import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {
  file!: File;
  selectedPhoto!: string | ArrayBuffer | null;

  constructor(
    private readonly router: Router,
    private readonly photosService: PhotosService
  ) {}

  ngOnInit(): void {}

  onPhotoSelected(event: any): void {
    if (event.target?.files && event.target?.files[0]) {
      const reader = new FileReader();

      this.file = event.target?.files[0];
      reader.onload = e => (this.selectedPhoto = reader.result);

      reader.readAsDataURL(this.file);
    }
  }

  uploadPhoto(title: string, description: string): boolean {
    this.photosService
      .createPhoto(title, description, this.file)
      .subscribe(() => this.router.navigate(['/photos']), console.error);

    return false;
  }
}
