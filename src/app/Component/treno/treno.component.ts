import { Component, OnInit } from '@angular/core';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';

import { LISTAMETRO } from 'src/app/model/dati/LISTAMETRO';
import { LISTAMSG } from 'src/app/model/dati/LISTAMSG';

@Component({
  selector: 'app-treno',
  templateUrl: './treno.component.html',
  styleUrls: ['./treno.component.css']
})
export class TrenoComponent implements OnInit {
  listaMetro: IMetro[] ;
  now : number
  trenoSelezionato : IMetro
  constructor() {
    this.listaMetro= []
    this.now = new Date().getTime();
  }

  ngOnInit(): void {
    this.listaMetro = LISTAMETRO;
  }

  setMetro(treno){
    this.trenoSelezionato = treno;
  }

}
