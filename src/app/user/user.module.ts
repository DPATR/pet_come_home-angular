import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserService } from './user.service';
import { UserIndexComponent } from './user-index/user-index.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [UserComponent, UserNewComponent, UserIndexComponent],
  providers: [UserService]
})
export class UserModule { }
