import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LocationComponent } from './location.component';
import { LocationIndexComponent } from './location-index/location-index.component';
import { LocationNewComponent } from './location-new/location-new.component';

const petRoutes: Routes = [
  {
    path: 'location',
    component: LocationComponent,
    children: [
      // {
      //   path: '',
      //   component: LocationIndexComponent
      // },
      {
        //path: 'new',
        path: '',
        component: LocationNewComponent
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
