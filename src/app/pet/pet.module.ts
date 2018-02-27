import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PetComponent } from './pet.component';
import { PetIndexComponent } from './pet-index/pet-index.component';
import { PetService } from './pet.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [PetComponent, PetIndexComponent],
  providers: [PetService]
})
export class PetModule { }
