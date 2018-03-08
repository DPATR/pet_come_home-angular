import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  // template: `
  //   <input [textMask]="{mask: mask}" [(ngModel)]="myModel" type="text"/>
  // `,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //mask: any[] = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  //public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor() { }

  ngOnInit() {
  }

}
