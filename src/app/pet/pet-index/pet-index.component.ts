import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pet-index',
  templateUrl: './pet-index.component.html',
  styleUrls: ['./pet-index.component.css']
})
export class PetIndexComponent implements OnInit {

  allPets = [];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public petService: PetService
  ) { }

  ngOnInit() {  //removed to test Httpclient
    console.log('I am in the pet-index component module');
    this.petService.getAllPets()
    .subscribe(response => {
      this.allPets = response.json()
      console.log(this.allPets)
    });
  }

  deletePet(deletedPet) {
    this.petService.deletePet(deletedPet)
    .subscribe(
      response => {
        let petIndex = this.allPets.indexOf(deletedPet);
        this.allPets.splice(petIndex, 1);
        this.petService.deletePetSuccess = true
        this.petService.deletePetFailure = false
      },
      err => {
        this.petService.deletePetSuccess = false
        this.petService.deletePetFailure = true
      }
    );
  }

}
