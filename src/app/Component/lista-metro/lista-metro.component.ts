import { Component, OnInit, Input } from '@angular/core';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';

import { LISTAMETRO } from 'src/app/model/dati/LISTAMETRO';
import { LISTAMSG } from 'src/app/model/dati/LISTAMSG';
@Component({
  selector: 'app-lista-metro',
  templateUrl: './lista-metro.component.html',
  styleUrls: ['./lista-metro.component.css'],
})
export class ListaMetroComponent implements OnInit {
  listaMetro: IMetro[];

  constructor() {
    this.listaMetro = [
      { idt: 'ASD', linea: 'Rossa', numerochatting: 32, tempo: 125000 },
      { idt: 'AKE', linea: 'Verde', numerochatting: 29, tempo: 145000 },
      { idt: 'BFD', linea: 'Gialla', numerochatting: 47, tempo: 155000 },
    ];
  }

  ngOnInit(): void {}
}
