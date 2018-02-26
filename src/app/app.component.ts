import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


interface GreetingResponse {
//   id: number;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//export class AppComponent implements OnInit
export class AppComponent {
  title = 'Pet Come Home';

  constructor(
    //private router: Router
    //private http: HttpClient
  ) {}

  ngOnInit(): void {
    //   this.http.get<GreetingResponse>('https://pcf-java.sandbox.paas.lmig.com/greeting').subscribe(data => {
    //   this.results = data;
    // });
    console.log('I am in the app.component module');
  }
}
