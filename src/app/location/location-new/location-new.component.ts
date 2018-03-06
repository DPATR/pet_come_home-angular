import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-new',
  templateUrl: './location-new.component.html',
  styleUrls: ['./location-new.component.css']
})
export class LocationNewComponent implements OnInit {

  newLocation = <any>{};

  constructor(
    public router: Router,
    public locationService: LocationService
  ) { }

  ngOnInit() {
  }

  saveLocation(newLocation) {
    const newCity= <HTMLInputElement>document.getElementById('new-loc-city')
    const newDesc = <HTMLInputElement>document.getElementById('new-loc-desc')
    const newLat = <HTMLInputElement>document.getElementById('new-loc-lat')
    const newLong = <HTMLInputElement>document.getElementById('new-loc-long')
    const newName = <HTMLInputElement>document.getElementById('new-loc-name')
    const newState = <HTMLInputElement>document.getElementById('new-loc-state')
    const newZip = <HTMLInputElement>document.getElementById('new-loc-newZip')

    this.locationService.saveLocation(newLocation)
      .subscribe(
        response => {
          let data = response.json();
          console.log(response.json());
          this.locationService.createLocationFailure = false;
          this.locationService.createLocationSuccess = true;
          this.router.navigate(['location']);
        },
        err => {
          this.locationService.createLocationFailure = true;
          this.locationService.createLocationSuccess = false;
          newCity.value = ''
          newDesc.value = ''
          newLat.value = ''
          newLong.value = ''
          newName.value = ''
          newState.value = ''
          //newZip.value = ''
        })
      }

}
