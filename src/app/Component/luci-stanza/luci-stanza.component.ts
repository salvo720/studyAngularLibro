import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luci-stanza',
  templateUrl: './luci-stanza.component.html',
  styleUrls: ['./luci-stanza.component.css']
})
export class LuciStanzaComponent implements OnInit {

  lucidb:any
  testSwitch : string

  constructor() {

    this.testSwitch = "valoreB"
    this.lucidb =
  [
    {stanza:" Luce Cucina" , stato : "OFF" , luminosita : 5 },
    {stanza:" Luce sala da pranzo" , stato : "ON" , luminosita : 2 },
    {stanza:" Luce bagno " , stato : "OFF" , luminosita : 8 },
  ]
  }

  ngOnInit(): void {
  }



}
