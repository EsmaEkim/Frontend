
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
    window.console.log.apply(console, ["\n %c Made with love \u2665 And Coffee - By Esma Ekim \n",
    "color: #000; background: #fd0; padding:5px 0;"])
    
  }

  

}

