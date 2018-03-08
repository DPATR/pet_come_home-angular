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
    public userService: LocationService
  ) { }

  ngOnInit() {
    console.log('I am in the user-index component module');
    this.userService.getAllLocations()
    .subscribe(response => {
      this.allLocations = response.json()
      console.log(this.allLocations)
    });
  }

}
