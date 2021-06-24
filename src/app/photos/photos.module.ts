import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';

@NgModule({
  declarations: [PhotoFormComponent, PhotoListComponent, PhotoPreviewComponent],
  imports: [CommonModule],
  exports: [PhotoFormComponent]
})
export class PhotosModule {}
