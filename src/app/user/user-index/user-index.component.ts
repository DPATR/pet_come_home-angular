import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  allUsers = [];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public userService: UserService
  ) { }

  ngOnInit() {
    console.log('I am in the user-index component module');
    this.userService.getAllUsers()
    .subscribe(response => {
      this.allUsers = response.json()
      console.log(this.allUsers)
    });
  }

}
