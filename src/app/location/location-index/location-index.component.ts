import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location-index',
  templateUrl: './location-index.component.html',
  styleUrls: ['./location-index.component.css']
})
export class LocationIndexComponent implements OnInit {

  allLocations = [];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public locationService: LocationService
  ) { }

  ngOnInit() {
    console.log('I am in the user-index component module');
    this.locationService.getAllLocations()
    .subscribe(response => {
      this.allLocations = response.json()
      console.log(this.allLocations)
    });
  }

  deleteLocation(deletedLocation) {
    this.locationService.deleteLocation(deletedLocation)
    .subscribe(
      response => {
        let locationIndex = this.allLocations.indexOf(deletedLocation);
        this.allLocations.splice(locationIndex, 1);
        this.locationService.deleteLocationSuccess = true
        this.locationService.deleteLocationFailure = false
      },
      err => {
        this.locationService.deleteLocationSuccess = false
        this.locationService.deleteLocationFailure = true
      }
    );
  }

}
