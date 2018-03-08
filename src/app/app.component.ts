import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


interface GreetingResponse {
//   id: number;
  content: string;
}

// added template:
@Component({
  selector: 'app-root',
  // template: `
  //   <input [textMask]="{mask: mask}" [(ngModel)]="myModel" type="text"/>
  // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//added public mask
export class AppComponent implements OnInit {
//export class AppComponent {
  title = 'Pet Come Home';
  pageLocation: string;
  //mask: any[] = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  //public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private router: Router
    //private http: HttpClient
  ) { router.events.subscribe((val => { this.findLocation() }));
  }

  ngOnInit(): void {
    //   this.http.get<GreetingResponse>('https://pcf-java.sandbox.paas.lmig.com/greeting').subscribe(data => {
    //   this.results = data;
    // });
    // [ngClass]="{'show': pet.initial }"

    console.log('I am in the app.component module');
  }

  findLocation() {
    this.pageLocation = this.router.url;
    console.log(this.pageLocation);
  }
}
