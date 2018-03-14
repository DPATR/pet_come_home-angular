import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.css']
})
export class PetViewComponent implements OnInit {

  viewPet = <any>{};

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    public petService : PetService
  ) { }

  ngOnInit() {
    // Added 3-13-18
    const viewPetName = <HTMLInputElement>document.getElementById('pet-name')
    const viewPetChipTag = <HTMLInputElement>document.getElementById('pet-chipTag')
    const viewPetRabiesTag = <HTMLInputElement>document.getElementById('pet-rabiesTag')
    const viewupdPetDesc = <HTMLInputElement>document.getElementById('pet-desc')
    const viewPetBreed = <HTMLInputElement>document.getElementById('pet-breed')
    const viewPetSize = <HTMLInputElement>document.getElementById('pet-size')
    const viewPetColor = <HTMLInputElement>document.getElementById('pet-color')
    const viewPetType = <HTMLInputElement>document.getElementById('pet-type')
    const viewPetStatus = <HTMLInputElement>document.getElementById('pet-status')
    //const updPetLoc = <HTMLInputElement>document.getElementById('update-petLoc')

    this.route.params.forEach( param => {
      console.log(' in pet-view component, param.id = ' + param.id)
      this.petService.getOnePet(param.id)
      .subscribe(response => {
        this.viewPet = response.json()
        console.log(this.viewPet)
      });
    });
  }

}
