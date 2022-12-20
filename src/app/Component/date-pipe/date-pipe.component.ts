import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css']
})
export class DatePipeComponent implements OnInit {
  dataoggi : Date
  stringaTest : string
  stringaTest2 : string
  numeroTest : number
  numeroTest2 : number
  numeroTest3 : number
  objectTest : object
  constructor() {
    this.dataoggi = new Date();
    this.stringaTest = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi aliquam quas at? ';
    this.stringaTest2 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi aliquam quas at? ';
    this.numeroTest = 30.50;
    this.numeroTest2 = 30.55;
    this.numeroTest3 = 0.3267;
    this.objectTest = { 'id': 1 , 'linea':'Rossa' , 'Test': false }
  }

  ngOnInit(): void {
  }

}
