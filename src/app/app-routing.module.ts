import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { PetComponent } from './pet/pet.component';
import { PetIndexComponent } from './pet/pet-index/pet-index.component';
import { PetNewComponent } from './pet/pet-new/pet-new.component';

import { LocationComponent } from './location/location.component';
import { LocationIndexComponent } from './location/location-index/location-index.component';
import { LocationNewComponent } from './location/location-new/location-new.component';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserIndexComponent } from './user/user-index/user-index.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  {
    path: 'pet',
    component: PetComponent,
    children: [
      {
        path: '',
        component: PetIndexComponent
      },
      {
        path: 'new',
        component: PetNewComponent
      }
    ]
  },
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
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
     {
        path: '',
        component: UserIndexComponent
     },
     {
        path: 'new',
        component: UserNewComponent
     }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
