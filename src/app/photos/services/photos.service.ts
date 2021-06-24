import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private readonly BASE_URL = 'http://localhost:3000/api/photos';

  constructor(private readonly http: HttpClient) {}

  createPhoto(
    title: string,
    description: string,
    photo: File
  ): Observable<object> {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('photo', photo);

    return this.http.post(this.BASE_URL, formData);
  }

  deletePhoto(photoId: string): Observable<object> {
    return this.http.delete(`${this.BASE_URL}/${photoId}`);
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.BASE_URL);
  }

  getPhoto(photoId: string): Observable<Photo> {
    return this.http.get<Photo>(`${this.BASE_URL}/${photoId}`);
  }

  updatePhoto(
    photoId: string,
    title: string,
    description: string
  ): Observable<object> {
    return this.http.put(`${this.BASE_URL}/${photoId}`, { title, description });
  }
}
