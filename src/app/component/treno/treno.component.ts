import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';

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
  errorMsg : any
  constructor(private router:Router , private treniService:TreniService) {
    this.listaMetro= [];
    this.treniPartiti= '';
    this.nowToday = new Date().getSeconds() + (new Date().getMinutes()*60) + ((new Date().getHours()*60)*60);

  }

  ngOnInit(): void {
    // this.listaMetro = this.treniService.getListaMetro();
    this.getListaMetroObservable();
  }

  getListaMetroObservable(){
    this.treniService.getListaMetroObservable().subscribe(
      risp => this.listaMetro = risp ,
      error => this.errorMsg = error
    );
  }

  setMetro(id:number){
    //TODO: qui si perde l'id da qualche parte bisogna capire dove e sistemarlo fermo  a pag 191
    console.log(id)
    this.router.navigate(['TreniInArrivo/Dettaglio',id]);
    // this.trenoSelezionato = treno;
  }

  partiti(id:number){
    this.treniPartiti = ' | ' + id
  }

}
