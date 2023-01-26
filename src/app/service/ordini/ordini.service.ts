import { IOrdini } from './../../model/interfaces/ordini/iordini';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdiniService {
  num: number;
  ordini: IOrdini[];
  // un observable Subject non ha un valore di defalt , questo significa che quando ci iscriviamo dobbiamo aspettare l'emissione di un nuovo valore
  // altrimenti non avremo nulla
  // a differenza behaviorSubject emette subito un valore di default che  sara disponibile fin all'emesione di un nuovo valore
  private ordiniSubject$ = new Subject();
  interval:ReturnType<typeof setInterval> | undefined;
  dati$:any;
  constructor() {
    this.num = 0;
    this.ordini = [
      { id: '123ED', prodotto: 'Pasta', prezzo: 1.20, quantita: 4 },
      { id: '233XC', prodotto: 'Pomodoro', prezzo: 1.50, quantita: 12 },
      { id: '234XC', prodotto: 'Mozzarella', prezzo: 4.50, quantita: 7 },
    ];
    this.interval = setInterval( ()=> this.newOrdine(),3000);
    // lasciano l'observable public , potremmo sovrascriverlo da un qualunque punto o richiamare il metodo next() emettendo valori non previsti ,
    // per evitare queste problematiche si usa :
    // asObservable viene usato su un observable privato , cosi da poter effettuare solo l'iscrizione all'observable
    this.dati$ = this.ordiniSubject$.asObservable();
  }

  newOrdine(){
    if(this.num<this.ordini.length){
      this.ordiniSubject$.next(this.ordini[this.num]);
      this.num++;
    }else{
      this.ordiniSubject$.complete();
      clearInterval(this.interval); // elimina il tempo del set Interval
    }
  }


}
