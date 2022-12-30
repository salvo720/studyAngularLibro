import { Component, OnInit } from '@angular/core';
import { IStanza } from 'src/app/model/interfaces/stanza/istanza';

@Component({
  selector: 'app-luci-stanza',
  templateUrl: './luci-stanza.component.html',
  styleUrls: ['./luci-stanza.component.css']
})
export class LuciStanzaComponent implements OnInit {

  lucidb:IStanza[]
  testSwitch : string
  show:boolean
  constructor() {

    this.testSwitch = "valoreB"
    this.show = true
    this.lucidb =
  [
    {stanza:"Luce Cucina" , stato : "OFF" , luminosita : 5 },
    {stanza:"Luce sala da pranzo" , stato : "ON" , luminosita : 2 },
    {stanza:"Luce bagno" , stato : "OFF" , luminosita : 8 },
  ]
  }

  ngOnInit(): void {
  }

  // attivo o disattivo le luci della stanza
  OnOFF(stanza){
    stanza.stato = !stanza.stato;
    console.log(stanza.stato)
  }



}
