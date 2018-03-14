import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../location/location.service';
import { LocationIndexComponent } from '../../location/location-index/location-index.component';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  updatedPet = <any>{};
  allLocations = [];
  allPetTypes = [];
  allPetStatuses = [];

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    public petService : PetService,
    public locationService: LocationService
  ) { }

  speciesResults = <any>{};
  statusResults = <any>{};
  locationResults = <any>{};

  ngOnInit() {
    console.log('I am in the pet-edit component calling getAllLocations');
    this.locationService.getAllLocations()
    .subscribe(response => {
      this.allLocations = response.json()
      console.log(this.allLocations)
    });
    console.log('I am in the pet-edit component calling getAllPetTypes');
    this.petService.getAllPetTypes()
    .subscribe(response => {
      this.allPetTypes = response.json()
      console.log(this.allPetTypes)
    });
    console.log('I am in the pet-edit component calling getAllPetStatuses');
    this.petService.getAllPetStatuses()
    .subscribe(response => {
      this.allPetStatuses = response.json()
      console.log(this.allPetStatuses)
    });

    const updPetName = <HTMLInputElement>document.getElementById('update-name')
    const updPetChipTag = <HTMLInputElement>document.getElementById('update-chipTag')
    const updPetRabiesTag = <HTMLInputElement>document.getElementById('update-rabiesTag')
    const updPetDesc = <HTMLInputElement>document.getElementById('update-desc')
    const updPetBreed = <HTMLInputElement>document.getElementById('update-breed')
    const updPetSize = <HTMLInputElement>document.getElementById('update-size')
    const updPetColor = <HTMLInputElement>document.getElementById('update-color')
    const updPetType = <HTMLInputElement>document.getElementById('update-type')
    const updPetStatus = <HTMLInputElement>document.getElementById('update-status')
    const updPetLoc = <HTMLInputElement>document.getElementById('update-petLoc')

    this.route.params.forEach( param => {
      console.log(' in pet-edit component, param.id = ' + param.id)
      this.petService.getOnePet(param.id)
      .subscribe(response => {
        var result = response.json();
        this.speciesResults = result.petType.petSpecies;
        //console.log(this.speciesResults);
        this.statusResults = result.petStatus.petStatus;
        //console.log(this.statusResults);
        this.locationResults = result.location.locName;
        //console.log(this.locationResults);
        this.updatedPet = response.json();
        updPetName.value = this.updatedPet.petName;
        updPetChipTag.value = this.updatedPet.petChipTag;
        updPetRabiesTag.value = this.updatedPet.petRabiesTag;
        updPetDesc.value = this.updatedPet.petDesc;
        updPetBreed.value = this.updatedPet.petBreed;
        updPetSize.value = this.updatedPet.petSize;
        updPetColor.value = this.updatedPet.petColor;
        updPetType.value = this.updatedPet.petType.petSpecies;
        updPetStatus.value = this.updatedPet.petStatus.petStatus;
        updPetLoc.value = this.updatedPet.location.locId;
      });
    });
  }

  updatePet(updatedPet) {
    console.log('updatedPet = ' + updatedPet)
    this.petService.updatePet(updatedPet)
      .subscribe(
        response => {
          let data = response.json();
          console.log(response.json());
          this.petService.updatePetFailure = false;
          this.router.navigate(['pet']);
        },
        err => {
          this.petService.updatePetFailure = true;
        })
    }

}
