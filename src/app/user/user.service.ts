import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment }  from '../../environments/environment';

@Injectable()
export class UserService {

  createUserFailure:  boolean;
  createUserSuccess:  boolean;

  getAllUsers() {
    return this.http.get(environment.apiServer + '/find-all-users');
  }

  // CREATE TABLE IF NOT EXISTS PCH.USER
  // (
  //   USER_ID INT NOT NULL AUTO_INCREMENT,
  //   USER_FIRST_NAME VARCHAR(45) NOT	NULL,
  //   USER_LAST_NAME VARCHAR(45) NOT NULL,
  //   USER_LOGIN VARCHAR(15) NOT NULL,
  //   USER_STATE CHAR(2) NOT NULL,
  //   USER_CITY VARCHAR(45) NOT NULL,
  //   USER_MOBILE CHAR(10) NULL,
  //   USER_EMAIL VARCHAR(60) NOT NULL,
  //   USER_ALT_PHONE CHAR(10) NULL,
  //   USER_ALT_EMAIL VARCHAR(60) NULL,
  //   USER_PASSWORD VARCHAR(15) NOT NULL,
  //   USER_ZIP VARCHAR(5) NULL,
  //   PRIMARY KEY (USER_ID)
  // )

  saveUser(newUser) {
    const userCreateParams = {
      userFirstName: newUser.firstName,
      userLastName: newUser.lastName,
      userLogin: newUser.login,
      userState: newUser.state,
      userCity: newUser.city,
      userMobile: newUser.mobile,
      userEmail: newUser.email,
      userAltPhone: newUser.altPhone,
      userAltEmail: newUser.altEmail,
      userPassword: newUser.password,
      userZip: newUser.zip
    }
    //console.log('userCreateParams ' + JSON.stringify(userCreateParams));
    return this.http.post(environment.apiServer + '/saveUser', userCreateParams);
  }

  constructor(private http: Http) { }

}
