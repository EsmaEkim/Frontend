
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = 'northwind';


  uıd:number

  constructor() { }

  ngOnInit(): void {
    window.console.log.apply(console, ["\n %c Everything was coded as it should be \u2665 -By Meds \n",
    "color: #000; background: #fd0; padding:5px 0;"])
    
  }

  

}

