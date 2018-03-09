import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment }  from '../../environments/environment';

@Injectable()
export class UserService {

  createUserFailure:  boolean;
  createUserSuccess:  boolean;
  updateUserFailure:  boolean;

  getAllUsers() {
    return this.http.get(environment.apiServer + '/find-all-users');
  }

  getOneUser(userId) {
    return this.http.get(environment.apiServer + '/find-user-by-id?userId=' + userId);
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
      userFirstName: newUser.userFirstName,
      userLastName: newUser.userLastName,
      userLogin: newUser.userLogin,
      userState: newUser.userState,
      userCity: newUser.userCity,
      userMobile: newUser.userMobile,
      userEmail: newUser.userEmail,
      userAltPhone: newUser.userAltPhone,
      userAltEmail: newUser.userAltEmail,
      userPassword: newUser.userPassword,
      userZip: newUser.userZip
    }
    console.log('userCreateParams ' + JSON.stringify(userCreateParams));
    return this.http.post(environment.apiServer + '/saveUser', userCreateParams);
  }

  updateUser(updatedUser) {
    console.log('updateduser ' + JSON.stringify(updatedUser));

    const userUpdateParams = {
      userId: updatedUser.userId,
      userFirstName: updatedUser.userFirstName,
      userLastName: updatedUser.userLastName,
      userLogin: updatedUser.userLogin,
      userState: updatedUser.userState,
      userCity: updatedUser.userCity,
      userMobile: updatedUser.userMobile,
      userEmail: updatedUser.userEmail,
      userAltPhone: updatedUser.userAltPhone,
      userAltEmail: updatedUser.userAltEmail,
      userPassword: updatedUser.userPassword,
      userZip: updatedUser.userZip
    }
    console.log('userUpdateParams ' + JSON.stringify(userUpdateParams));
    return this.http.put(environment.apiServer + '/updateUser', userUpdateParams);
  }

  constructor(private http: Http) { }

}
