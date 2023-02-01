import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';

import { TreniService } from 'src/app/service/treni/treni.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-treno',
  templateUrl: './treno.component.html',
  styleUrls: ['./treno.component.css'],
  animations: [
    trigger('titoloIn', [
      state('loading', style({
        opacity: 0,
        transform: 'TranslateX(100%)'
      })),
      state('showTitolo', style({
        opacity: 1
      })),
      transition('loading => showTitolo', animate('300ms ease-out'))
    ]), // animazione sul titolo
    trigger('listaTreniIn', [
      state('loading', style({ opacity: 0 })),
      state('showTreni', style({ opacity: 1  })),
      transition('loading => showTreni', animate('2s ease-in'))
     ]), //animazione sui treni
  ],
})
export class TrenoComponent implements OnInit {
  listaMetro: IMetro[];
  nowToday: number
  trenoSelezionato: IMetro
  treniPartiti: string
  errorMsg: any
  statoTitolo:string
  statoListaTreni:string
  constructor(private router: Router, private treniService: TreniService) {
    this.listaMetro = [];
    this.treniPartiti = '';
    this.nowToday = new Date().getSeconds() + (new Date().getMinutes() * 60) + ((new Date().getHours() * 60) * 60);
    this.statoTitolo = 'loading'
    this.statoListaTreni = 'loading'
  }

  ngOnInit(): void {
    // this.listaMetro = this.treniService.getListaMetro();
    this.getListaMetroObservable();
  }

  getListaMetroObservable() {
    this.treniService.getListaMetroObservable().subscribe(
      risp => {
        setTimeout(()=>{
          this.listaMetro = risp
          this.statoTitolo = 'showTitolo'
          this.statoListaTreni = 'showLista'
        },2000)

      },
      error => this.errorMsg = error
    );
  }

  setMetro(id: number) {
    //TODO: qui si perde l'id da qualche parte bisogna capire dove e sistemarlo fermo  a pag 191
    console.log(id)
    this.router.navigate(['TreniInArrivo/Dettaglio', id]);
    // this.trenoSelezionato = treno;
  }

  partiti(id: number) {
    this.treniPartiti = ' | ' + id
  }

}
