import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  updatedPet = <any>{};

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    public petService : PetService
  ) { }

  petResults = <any>{};

  ngOnInit() {
    const updPetName = <HTMLInputElement>document.getElementById('update-name')
    const updPetChipTag = <HTMLInputElement>document.getElementById('update-chipTag')
    const updPetRabiesTag = <HTMLInputElement>document.getElementById('update-rabiesTag')
    const updPetDesc = <HTMLInputElement>document.getElementById('update-desc')
    const updPetBreed = <HTMLInputElement>document.getElementById('update-breed')
    const updPetSize = <HTMLInputElement>document.getElementById('update-size')
    const updPetColor = <HTMLInputElement>document.getElementById('update-color')
    const updPetType = <HTMLInputElement>document.getElementById('update-type')
    const updPetStatus = <HTMLInputElement>document.getElementById('update-status')

    this.route.params.forEach( param => {
      console.log('param.id = ' + param.id)
      this.petService.getOnePet(param.id)
      .subscribe(response => {
        //console.log(response.json());
        var result = response.json();
        //console.log(result);
        this.petResults = result.petType.petSpecies;
        console.log(this.petResults);
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
