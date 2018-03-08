import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LocationComponent } from './location.component';
import { LocationIndexComponent } from './location-index/location-index.component';
import { LocationNewComponent } from './location-new/location-new.component';
import { LocationEditComponent } from './location-edit/location-edit.component';

const petRoutes: Routes = [
  {
    path: 'location',
    component: LocationComponent,
    children: [
      {
        path: '',
        component: LocationIndexComponent
      },
      {
        path: 'new',
        component: LocationNewComponent
      },
      {
        //path: 'edit',
        path: 'edit/:id',
        component: LocationEditComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(petRoutes)
  ],
exports: [
  RouterModule
]
})
export class LocationRoutingModule { }
