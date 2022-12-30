import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';

import { LISTAMETRO } from 'src/app/model/dati/LISTAMETRO';
import { LISTAMSG } from 'src/app/model/dati/LISTAMSG';
import { TreniService } from 'src/app/service/treni/treni.service';

@Component({
  selector: 'app-treno',
  templateUrl: './treno.component.html',
  styleUrls: ['./treno.component.css']
})
export class TrenoComponent implements OnInit {
  listaMetro: IMetro[] ;
  nowToday : number
  trenoSelezionato : IMetro
  treniPartiti : string
  constructor(private router:Router , private treniService:TreniService) {
    this.listaMetro= [];
    this.treniPartiti= '';
    this.nowToday = new Date().getSeconds() + (new Date().getMinutes()*60) + ((new Date().getHours()*60)*60);

  }

  ngOnInit(): void {
    this.listaMetro = this.treniService.getListaMetro();
  }

  setMetro(id:string){
    this.router.navigate(['TreniInArrivo/Dettaglio',id]);
    // this.trenoSelezionato = treno;
  }

  partiti(id:string){
    this.treniPartiti = ' | ' + id
  }

}
