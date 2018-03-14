import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PetComponent } from './pet.component';
import { PetIndexComponent } from './pet-index/pet-index.component';
import { PetNewComponent } from './pet-new/pet-new.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

const petRoutes: Routes = [
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
      },
      {
        path: 'edit/:id',
        component: PetEditComponent
      },
      {
        path: 'view/:id',
        component: PetEditComponent
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
