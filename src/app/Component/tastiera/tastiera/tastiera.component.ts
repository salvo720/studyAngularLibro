import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tastiera',
  templateUrl: './tastiera.component.html',
  styleUrls: ['./tastiera.component.css']
})
export class TastieraComponent implements OnInit {
  eventiTastiera : Array<KeyboardEvent>
  constructor() {
    this.eventiTastiera = [];
  }

  ngOnInit(): void {
  }

  checkTasto(event:KeyboardEvent){
    this.eventiTastiera.push(event);
  }

}
