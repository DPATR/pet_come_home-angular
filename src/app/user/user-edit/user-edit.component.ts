import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  updatedUser = <any>{};

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    public userService : UserService
  ) { }

  ngOnInit() {
    const updFirstName = <HTMLInputElement>document.getElementById('update-firstName')
    const updLastName = <HTMLInputElement>document.getElementById('update-lastName')
    const updLogin = <HTMLInputElement>document.getElementById('update-login')
    const updState = <HTMLInputElement>document.getElementById('update-state')
    const updCity = <HTMLInputElement>document.getElementById('update-city')
    const updMobile = <HTMLInputElement>document.getElementById('update-mobile')
    const updEmail = <HTMLInputElement>document.getElementById('update-email')
    const updAltPhone = <HTMLInputElement>document.getElementById('update-altPhone')
    const updAltEmail = <HTMLInputElement>document.getElementById('update-altEmail')
    const updPassword = <HTMLInputElement>document.getElementById('update-password')
    const updZip = <HTMLInputElement>document.getElementById('update-zip')

    this.route.params.forEach( param => {
      console.log('param.id = ' + param.id)
      this.userService.getOneUser(param.id)
      .subscribe(response => {
        console.log(response.json());
        this.updatedUser = response.json();
        updFirstName.value = this.updatedUser.userFirstName;
        updLastName.value = this.updatedUser.userLastName;
        updLogin.value = this.updatedUser.userLogin;
        updState.value = this.updatedUser.userState;
        updCity.value = this.updatedUser.userCity;
        updMobile.value = this.updatedUser.userMobile;
        updEmail.value = this.updatedUser.userEmail;
        updAltPhone.value = this.updatedUser.userAltPhone;
        updAltEmail.value = this.updatedUser.userAltEmail;
        updPassword.value = this.updatedUser.userPassword;
        updZip.value = this.updatedUser.userZip;
      });
    });
  }

  updateUser(updatedUser) {
    console.log('updatedUser = ' + updatedUser)
    this.userService.updateUser(updatedUser)
      .subscribe(
        response => {
          let data = response.json();
          console.log(response.json());
          this.userService.updateUserFailure = false;
          this.router.navigate(['user']);
        },
        err => {
          this.userService.updateUserFailure = true;
        })
    }

}
