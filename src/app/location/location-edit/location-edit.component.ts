import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {

  updatedLocation = <any>{};

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    public locationService : LocationService
  ) { }

  ngOnInit() {
    const locName = <HTMLInputElement>document.getElementById('update-name')
    const locCity= <HTMLInputElement>document.getElementById('update-city')
    const locState = <HTMLInputElement>document.getElementById('update-state')
    const locZip = <HTMLInputElement>document.getElementById('update-zip')
    const locDesc = <HTMLInputElement>document.getElementById('update-desc')
    const locLat = <HTMLInputElement>document.getElementById('update-lat')
    const locLong = <HTMLInputElement>document.getElementById('update-long')

    this.route.params.forEach( param => {
      console.log('param.id = ' + param.id)
      this.locationService.getOneLocation(param.id)
      .subscribe(response => {
        console.log(response.json());
        this.updatedLocation = response.json();
        locName.value = this.updatedLocation.locName;
        locCity.value = this.updatedLocation.locCity;
        locState.value = this.updatedLocation.locState;
        locZip.value = this.updatedLocation.locZip;
        locDesc.value = this.updatedLocation.locDesc;
        locLat.value = this.updatedLocation.locLat;
        locLong.value = this.updatedLocation.locLong;
      });
    });
  }

  updateLocation(updatedLocation) {
    console.log('updatedLocation = ' + updatedLocation)
    this.locationService.updateLocation(updatedLocation)
      .subscribe(
        response => {
          let data = response.json();
          console.log(response.json());
          this.locationService.updateLocationFailure = false;
          this.router.navigate(['location']);
        },
        err => {
          this.locationService.updateLocationFailure = true;
        })
      }

}
