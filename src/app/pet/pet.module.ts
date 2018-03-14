import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PetComponent } from './pet.component';
import { PetIndexComponent } from './pet-index/pet-index.component';
import { PetNewComponent } from './pet-new/pet-new.component';
import { PetService } from './pet.service';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetViewComponent } from './pet-view/pet-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [PetComponent, PetIndexComponent, PetNewComponent, PetEditComponent, PetViewComponent],
  providers: [PetService]
})
export class PetModule { }
