import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserIndexComponent } from './user-index/user-index.component';

const userRoutes: Routes = [
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
      RouterModule.forChild(userRoutes)
    ],
  exports: [
    RouterModule
  ]
  })
export class UserRoutingModule { }
