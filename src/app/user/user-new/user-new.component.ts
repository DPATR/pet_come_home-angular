import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  newUser = <any>{};

  constructor(
    public router: Router,
    public userService: UserService
  ) { }

  ngOnInit() {
  }

    saveUser(newUser) {
      const newFirstName= <HTMLInputElement>document.getElementById('new-first-name')
      const newLastName = <HTMLInputElement>document.getElementById('new-last-name')
      const newLogin = <HTMLInputElement>document.getElementById('new-login')
      const newCity = <HTMLInputElement>document.getElementById('new-city')
      const newState = <HTMLInputElement>document.getElementById('new-state')
      const newMobile = <HTMLInputElement>document.getElementById('new-mobile')
      const newEmail = <HTMLInputElement>document.getElementById('new-email')
      const newAltPhone = <HTMLInputElement>document.getElementById('new-altPhone')
      const newAltEmail = <HTMLInputElement>document.getElementById('new-altEmail')
      const newPassword = <HTMLInputElement>document.getElementById('new-password')
      const newZip = <HTMLInputElement>document.getElementById('new-zip')

      this.userService.saveUser(newUser)
        .subscribe(
          response => {
            let data = response.json();
            console.log(response.json());
            this.userService.createUserFailure = false;
            this.userService.createUserSuccess = true;
            this.router.navigate(['user']);
          },
          err => {
            this.userService.createUserFailure = true;
            this.userService.createUserSuccess = false;
            newFirstName.value = ''
            newLastName.value = ''
            newLogin.value = ''
            newCity.value = ''
            newState.value = ''
            newMobile.value = ''
            newEmail.value = ''
            newAltPhone.value = ''
            newPassword.value = ''
            newZip.value = ''
          })
        }

}
