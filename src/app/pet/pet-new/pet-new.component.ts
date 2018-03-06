import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {

  newPet = <any>{};

  constructor(
    public router: Router,
    public petService: PetService
  ) { }

  ngOnInit() {
  }

  savePet(newPet) {
    const newPetName = <HTMLInputElement>document.getElementById('new-petName')
    const newPetBreed = <HTMLInputElement>document.getElementById('new-petBreed')
    const newPetColor = <HTMLInputElement>document.getElementById('new-petColor')
    const newPetSize = <HTMLInputElement>document.getElementById('new-petSize')
    const newPetChipTag = <HTMLInputElement>document.getElementById('new-petChipTag')
    const newPetRabiesTag = <HTMLInputElement>document.getElementById('new-petRabiesTag')
    // const newPetSpecies = <HTMLInputElement>document.getElementById('new-petSpecies')
    const newPetType = <HTMLInputElement>document.getElementById('new-petType')
    const newPetStatus = <HTMLInputElement>document.getElementById('new-petStatus')
    // const newPetLostDate = <HTMLInputElement>document.getElementById('new-petLostDate ')
    // const newPetFoundDate = <HTMLInputElement>document.getElementById('new-petFoundDate')
    const newPetDesc = <HTMLInputElement>document.getElementById('new-petDesc')

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
        // newPetSpecies.value = ''
        newPetStatus.value = ''
        // newPetLostDate.value = ''
        // newPetFoundDate.value = ''
        newPetDesc.value = ''
      })
    }

}
