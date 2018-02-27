import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment }  from '../../environments/environment';

@Injectable()
export class PetService {

  createPetFailure:  boolean;
  updatePetFailure:  boolean;
  deletePetFailure:  boolean;
  deletePetSuccess:  boolean;

  getAllPets() {
  //let config = {}
  //config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
  //return this.http.get(environment.apiServer + '/bills', config);
  return this.http.get(environment.apiServer + '/find-all-pets');
  }

  constructor(private http: Http) { }

}
