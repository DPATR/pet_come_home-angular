import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class LocationService {

  createLocationFailure:  boolean;
  createLocationSuccess:  boolean;

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

  constructor(private http: Http) { }

}
