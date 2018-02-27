import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { PetModule } from './pet/pet.module';
import { PetRoutingModule } from './pet/pet-routing.module';
import { PetService } from './pet/pet.service';

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
    PetRoutingModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
