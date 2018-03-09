import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class LocationService {

  createLocationFailure:  boolean;
  createLocationSuccess:  boolean;
  updateLocationFailure:  boolean;
  deleteLocationFailure:  boolean;
  deleteLocationSuccess:  boolean;

  //  CREATE TABLE IF NOT EXISTS PCH.LOCATION
  //  (
  //   LOC_ID INT NOT NULL AUTO_INCREMENT,
  //   LOC_LAT DECIMAL(10,7) NULL,
  //   LOC_LONG DECIMAL(10,7) NULL,
  //   LOC_NAME VARCHAR(45) NOT NULL,
  //   LOC_DESC VARCHAR(280) NULL,
  //   LOC_STATE CHAR(2) NULL,
  //   LOC_CITY VARCHAR(45) NULL,
  //   LOC_ZIP VARCHAR(5) NULL,
  //   LOC_IND CHAR(1) NULL,
  //   PRIMARY KEY (LOC_Id)

  getAllLocations() {
    return this.http.get(environment.apiServer + '/find-all-pet-locations');
  }

  getOneLocation(locId) {
    return this.http.get(environment.apiServer + '/find-location-by-id?locId=' + locId);
  }

  deleteLocation(location) {
    return this.http.delete(environment.apiServer + '/delete-location-by-id?locId=' + location.locId)
  }

  saveLocation(newLocation) {
    var indicator = '1';
    // const headers = new Headers(
    //   {
    //     'Content-Type': 'application/json'
    //   });
    // headers.append("Accept", 'application/json');
    //console.log('headers = ' + JSON.stringify(headers))
    let lat = newLocation.locLat;

    const locCreateParams = {
      locLat: newLocation.locLat,
      locLong: newLocation.locLong,
      locName: newLocation.locName,
      locDesc: newLocation.locDesc,
      locState: newLocation.locState,
      locCity: newLocation.locCity,
      locZip: newLocation.locZip,
      locInd: indicator
    }
    console.log('locCreateParams ' + JSON.stringify(locCreateParams));
    return this.http.post(environment.apiServer + '/saveLocation', locCreateParams);
  }

  updateLocation(updatedLocation) {
    console.log('updatedLocation ' + JSON.stringify(updatedLocation));
    var indicator = '1';
    // const headers = new Headers(
    //   {
    //     'Content-Type': 'application/json'
    //   });
    // headers.append("Accept", 'application/json');
    //console.log('headers = ' + JSON.stringify(headers))
    let lat = updatedLocation.locLat;

    const locUpdateParams = {
      locId: updatedLocation.locId,
      locLat: updatedLocation.locLat,
      locLong: updatedLocation.locLong,
      locName: updatedLocation.locName,
      locDesc: updatedLocation.locDesc,
      locState: updatedLocation.locState,
      locCity: updatedLocation.locCity,
      locZip: updatedLocation.locZip,
      locInd: indicator
    }
    console.log('locUpdateParams ' + JSON.stringify(locUpdateParams));
    return this.http.put(environment.apiServer + '/updateLocation', locUpdateParams);
  }

  constructor(private http: Http) { }

}
