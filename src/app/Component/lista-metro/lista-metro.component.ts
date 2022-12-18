import { Component, OnInit, Input } from '@angular/core';
import { IListaMetro } from 'src/app/interfaces/ilista-metro';

@Component({
  selector: 'app-lista-metro',
  templateUrl: './lista-metro.component.html',
  styleUrls: ['./lista-metro.component.css'],
})
export class ListaMetroComponent implements OnInit {
  listaMetro: IListaMetro[];

  constructor() {
    this.listaMetro = [
      { id: 'ASD', linea: 'Rossa', numerochatting: 32, tempo: 125000 },
      { id: 'AKE', linea: 'Verde', numerochatting: 29, tempo: 145000 },
      { id: 'BFD', linea: 'Gialla', numerochatting: 47, tempo: 155000 },
    ];
  }

  ngOnInit(): void {}
}
