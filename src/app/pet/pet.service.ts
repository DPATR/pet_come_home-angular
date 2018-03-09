import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //removed to test Httpclient
//import { HttpClient } from '@angular/common/http';
import { environment }  from '../../environments/environment';
import { LocationComponent } from '../location/location.component';
import { UserComponent } from '../user/user.component';

@Injectable()
export class PetService {

  createPetFailure:  boolean;
  updatePetFailure:  boolean;
  deletePetFailure:  boolean;
  deletePetSuccess:  boolean;

  getDate() {
    var today = new Date().toISOString().substring(0, 10);
    return today;
  }

  getAllPets() {
    return this.http.get(environment.apiServer + '/find-all-pets');
  }

  getOnePet(petId) {
    return this.http.get(environment.apiServer + '/find-pet-by-id?petId=' + petId);
  }

  deletePet(pet) {
    return this.http.delete(environment.apiServer + '/delete-pet-by-id?petId=' + pet.petId)
  }

	//insert into PCH.pet values (1, 'Muffins', '233145', '233145', 'A pretty cat', 'Siamese', 'Medium', 'Gray', 'test', '2018-02-27', '2018-02-27', '2018-02-27', '2018-02-27', '2018-02-27', '1', '0', '1', '0');
  //PET_STATUS values (0, 'LOST'), (1, 'FOUND'), (2, 'SIGHTED'), (3, 'RETURNED')
  //PET_TYPE values (0, 'Dog', true), (1, 'Cat', true), (2, 'Reptile', true), (3, 'Farm Animal', false), (4, 'Bird', true), (5, 'Other', true);
  //      PET_ID INT NOT NULL AUTO_INCREMENT,
  // 			PET_NAME VARCHAR(45) NULL,
  // 			PET_CHIP_TAG VARCHAR(45) NULL,
  // 			PET_RABIES_TAG VARCHAR(45) NULL,
  // 			PET_DESC VARCHAR(280) NOT NULL,
  // 			PET_BREED VARCHAR(45) NULL,
  // 			PET_SIZE VARCHAR(45) NOT NULL,
  // 			PET_COLOR VARCHAR(45) NOT NULL,
  // 			PET_IMG_URL VARCHAR(100) NULL,
  // 			PET_CREATE_DATE DATE NULL,
  //  			PET_MODIFIED_DATE DATE NULL,
  // 			PET_LOST_DATE DATE NULL,
  // 			PET_FOUND_DATE DATE NULL,
  // 			PET_SIGHTED_DATE DATE NULL,
  // 			PET_TYPE_ID INT NOT NULL,
  // 			USER_ID INT NOT NULL,
  // 			PET_STATUS_ID INT NOT NULL,
  //  			LOC_ID INT NOT NULL,

  savePet(newPet) {
    const today = this.getDate();
    console.log('in PetService, today = ' + today);
    // console.log('newPet = ' + newPet);
    var imgURL = 'test';
    // Temp set status = 1 (FOUND)
    var lostDate = ''
    var foundDate = ''
    var sightedDate = ''
    var modifiedDate = ''
    var status = 0
    var type = 0
    var label = ''
    var loc = 0
    // Temp set dates to current date until we have in the UI
    console.log('petStatus = ' + newPet.petStatus)
    switch (newPet.petStatus) {
      case 'LOST':
        lostDate = today;
        status = 0;
        break;
      case 'FOUND':
        foundDate = today;
        status = 1;
        break;
      case 'SIGHTED':
        sightedDate = today;
        status = 2;
        break;
      case 'RETURNED':
        status = 3;
    }
    console.log('petType = ' + newPet.petType)
    switch (newPet.petType) {
      case 'DOG':
        type = 0;
        label = 'Dog';
        break;
      case 'CAT':
        type = 1;
        label = 'Cat';
        break;
      case 'REPTILE':
        type = 2;
        label = 'Reptile';
        break;
      case 'FARM ANIMAL':
        type = 3;
        label = 'Farm Animal';
        break;
      case 'BIRD':
        type = 4;
        label = 'Bird';
        break;
      case 'OTHER':
        type = 5;
        label = 'Other';
    }

    const petCreateParams = {
      petName: newPet.petName,
      petChipTag: newPet.petChipTag,
      petRabiesTag: newPet.petRabiesTag,
      petDesc: newPet.petDesc,
      petBreed: newPet.petBreed,
      petSize: newPet.petSize,
      petColor: newPet.petColor,
      petImgUrl: imgURL,
      petCreateDate: today,
      petModifiedDate: today,
      petLostDate: today,
      petFoundDate: today,
      petSightedDate: today,
      "petType" : {
        petTypeId: type,
        petSpecies: label,
        dropDownInd: true
      },
      "user" : {
        userId: 1,
        userFirstName: 'Denise',
        userLastName: 'Patriquin',
        userLogin: 'dpatr',
        userState: 'NH',
        userCity: 'Dover',
        userMobile: '6032224545',
        userEmail: 'dpatr@hotmail.com',
        userAltPhone: '6032457676',
        userAltEmail: 'dpatr@gmail.com',
        userPassword: 'password',
        userZip: '03801'
      },
      "petStatus" : {
        petStatusId: status,
        petStatus: newPet.petStatus
      },
      "location" : {
        locId: 0,
        locLat: 38.8977000,
        locLong: -77.0365000,
        locName: 'DogHOuse',
        locDesc: 'where dogs get fleas',
        locState: 'DC',
        locCity: 'Washington',
        locZip: '20500',
        locInd: '1'
      }
    }

    //console.log(JSON.stringify(petCreateParams))
    return this.http.post(environment.apiServer + '/savePet', petCreateParams);
  }

  updatePet(updatedPet) {
    console.log('updatedPet ' + JSON.stringify(updatedPet));

    const today = this.getDate();
    console.log('in PetService, today = ' + today);
    // console.log('newPet = ' + newPet);
    var imgURL = 'test';
    // Temp set status = 1 (FOUND)
    var lostDate = updatedPet.petLostDate
    var foundDate = updatedPet.petFoundDate
    var sightedDate = updatedPet.petSightedDate
    var modifiedDate = today
    var status = 0
    var type = 0
    var label = ''
    var loc = 0
    // Temp set dates to current date until we have in the UI
    console.log('petStatus = ' + updatedPet.petStatus)
    switch (updatedPet.petStatus) {
      case 'LOST':
        lostDate = today;
        status = 0;
        break;
      case 'FOUND':
        foundDate = today;
        status = 1;
        break;
      case 'SIGHTED':
        sightedDate = today;
        status = 2;
        break;
      case 'RETURNED':
        status = 3;
    }
    console.log('petType = ' + updatedPet.petType)
    switch (updatedPet.petType) {
      case 'DOG':
        type = 0;
        label = 'Dog';
        break;
      case 'CAT':
        type = 1;
        label = 'Cat';
        break;
      case 'REPTILE':
        type = 2;
        label = 'Reptile';
        break;
      case 'FARM ANIMAL':
        type = 3;
        label = 'Farm Animal';
        break;
      case 'BIRD':
        type = 4;
        label = 'Bird';
        break;
      case 'OTHER':
        type = 5;
        label = 'Other';
    }

    const petUpdateParams = {
      petId: updatedPet.petId,
      petName: updatedPet.petName,
      petChipTag: updatedPet.petChipTag,
      petRabiesTag: updatedPet.petRabiesTag,
      petDesc: updatedPet.petDesc,
      petBreed: updatedPet.petBreed,
      petSize: updatedPet.petSize,
      petColor: updatedPet.petColor,
      petImgUrl: imgURL,
      petCreateDate: updatedPet.petCreateDate,
      petModifiedDate: modifiedDate,
      petLostDate: lostDate,
      petFoundDate: foundDate,
      petSightedDate: sightedDate,
      "petType" : {
        petTypeId: type,
        petSpecies: label,
        dropDownInd: true
      },
      "user" : {
        userId: 1,
        userFirstName: 'Denise',
        userLastName: 'Patriquin',
        userLogin: 'dpatr',
        userState: 'NH',
        userCity: 'Dover',
        userMobile: '6032224545',
        userEmail: 'dpatr@hotmail.com',
        userAltPhone: '6032457676',
        userAltEmail: 'dpatr@gmail.com',
        userPassword: 'password',
        userZip: '03801'
      },
      "petStatus" : {
        petStatusId: status,
        petStatus: updatedPet.petStatus
      },
      "location" : {
        locId: 0,
        locLat: 38.8977000,
        locLong: -77.0365000,
        locName: 'DogHOuse',
        locDesc: 'where dogs get fleas',
        locState: 'DC',
        locCity: 'Washington',
        locZip: '20500',
        locInd: '1'
      }
    }
    console.log('petUpdateParams ' + JSON.stringify(petUpdateParams));
    return this.http.put(environment.apiServer + '/updatePet', petUpdateParams);
  }

  constructor(private http: Http) { } //removed to test Httpclient
  //constructor(private http: HttpClient) { }

}
