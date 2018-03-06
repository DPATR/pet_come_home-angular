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

  // userFirstName: newUser.userFirstName,
  // userLastName: newUser.userLastName,
  // userLogin: newUser.userLogin,
  // userCity: newUser.userCity,
  // userState: newUser.userState,
  // userEmail: newUser.userEmail,
  // userPassword: newUser.userPassword


  saveUser(newUser) {
    const firstName= <HTMLInputElement>document.getElementById('new-first-name')
    const lastName = <HTMLInputElement>document.getElementById('new-last-name')
    const login = <HTMLInputElement>document.getElementById('new-login')
    const city = <HTMLInputElement>document.getElementById('new-city')
    const state = <HTMLInputElement>document.getElementById('new-state')
    const email = <HTMLInputElement>document.getElementById('new-email')
    const password = <HTMLInputElement>document.getElementById('new-password')

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
          firstName.value = ''
          lastName.value = ''
          login.value = ''
          city.value = ''
          state.value = ''
          email.value = ''
          password.value = ''
        })
      }

}
