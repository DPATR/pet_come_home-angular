import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PetComponent } from './pet.component';
import { PetIndexComponent } from './pet-index/pet-index.component';

const petRoutes: Routes = [
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
    RouterModule.forChild(petRoutes)
  ],
exports: [
  RouterModule
]
})
export class PetRoutingModule { }
