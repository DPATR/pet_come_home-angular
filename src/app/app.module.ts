import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
//import { TextMaskModule } from 'angular2-text-mask';

import { PetModule } from './pet/pet.module';
import { PetRoutingModule } from './pet/pet-routing.module';
import { PetService } from './pet/pet.service';

import { LocationModule} from './location/location.module';
import { LocationRoutingModule } from './location/location-routing.module';
import { LocationService } from './location/location.service';

import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    PetModule,
    PetRoutingModule,
    LocationModule,
    LocationRoutingModule,
    UserModule,
    UserRoutingModule
    //TextMaskModule
  ],
  providers: [PetService, LocationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
