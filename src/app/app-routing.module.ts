import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { PetComponent } from './pet/pet.component';
import { PetIndexComponent } from './pet/pet-index/pet-index.component';


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
