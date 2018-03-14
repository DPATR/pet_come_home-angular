
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../pet.service';
import { LocationService } from '../../location/location.service';
import { LocationIndexComponent } from '../../location/location-index/location-index.component';

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {

  newPet = <any>{};
  allLocations = [];
  allPetTypes = [];
  allPetStatuses = [];

  constructor(
    public router: Router,
    public petService: PetService,
    public locationService: LocationService
  ) { }

  ngOnInit() {
    console.log('I am in the pet-new component calling getAllLocations');
    this.locationService.getAllLocations()
    .subscribe(response => {
      this.allLocations = response.json()
      console.log(this.allLocations)
    });
    console.log('I am in the pet-new component calling getAllPetTypes');
    this.petService.getAllPetTypes()
    .subscribe(response => {
      this.allPetTypes = response.json()
      console.log(this.allPetTypes)
    });
    console.log('I am in the pet-new component calling getAllPetStatuses');
    this.petService.getAllPetStatuses()
    .subscribe(response => {
      this.allPetStatuses = response.json()
      console.log(this.allPetStatuses)
    });
  }

  savePet(newPet) {
    const newPetName = <HTMLInputElement>document.getElementById('new-petName')
    const newPetBreed = <HTMLInputElement>document.getElementById('new-petBreed')
    const newPetColor = <HTMLInputElement>document.getElementById('new-petColor')
    const newPetSize = <HTMLInputElement>document.getElementById('new-petSize')
    const newPetChipTag = <HTMLInputElement>document.getElementById('new-petChipTag')
    const newPetRabiesTag = <HTMLInputElement>document.getElementById('new-petRabiesTag')
    const newPetType = <HTMLInputElement>document.getElementById('new-petType')
    const newPetStatus = <HTMLInputElement>document.getElementById('new-petStatus')
    // const newPetLostDate = <HTMLInputElement>document.getElementById('new-petLostDate ')
    // const newPetFoundDate = <HTMLInputElement>document.getElementById('new-petFoundDate')
    const newPetDesc = <HTMLInputElement>document.getElementById('new-petDesc')
    const newPetLoc = <HTMLInputElement>document.getElementById('new-petLoc')

    this.petService.savePet(newPet)
    .subscribe(
      response => {
        let data = response.json();
        console.log(response.json());
        this.router.navigate(['pet']);
      },
      err => {
        this.petService.createPetFailure = true
        newPetName.value = ''
        newPetBreed.value = ''
        newPetColor.value = ''
        newPetSize.value = ''
        newPetChipTag.value = ''
        newPetRabiesTag.value = ''
        newPetStatus.value = ''
        // newPetLostDate.value = ''
        // newPetFoundDate.value = ''
        newPetDesc.value = ''
        newPetLoc.value = ''
      })
    }

}
