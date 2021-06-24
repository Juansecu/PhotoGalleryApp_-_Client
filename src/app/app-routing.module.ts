import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoFormComponent } from './photos/components/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/components/photo-list/photo-list.component';
import { PhotoPreviewComponent } from './photos/components/photo-preview/photo-preview.component';

const routes: Routes = [
  {
    path: 'photos',
    component: PhotoListComponent
  },
  {
    path: 'photos/new',
    component: PhotoFormComponent
  },
  {
    path: 'photos/:photoId',
    component: PhotoPreviewComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'photos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
