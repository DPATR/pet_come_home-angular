import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LocationComponent } from './location.component';
import { LocationIndexComponent } from './location-index/location-index.component';
import { LocationNewComponent } from './location-new/location-new.component';
import { LocationService } from './location.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [LocationComponent, LocationIndexComponent, LocationNewComponent],
  providers: [LocationService]
})
export class LocationModule { }
