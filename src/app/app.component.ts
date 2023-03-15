import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'advice-generator';

  advice!:string;

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.http.get<any> ('https://api.adviceslip.com/advice').subscribe(data => {

      this.advice = data.slip.advice;

    });
  }

}
