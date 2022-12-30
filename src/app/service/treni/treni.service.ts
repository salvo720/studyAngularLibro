import { Injectable } from '@angular/core';
import { LISTAMETRO } from 'src/app/model/dati/LISTAMETRO';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';

@Injectable({
  providedIn: 'root',
})
export class TreniService {
  constructor() {}

  getListaMetro(): IMetro[] {
    // recupero i dati statici
    return LISTAMETRO;
  }

  getDettaglioMetro(id:string): IMetro {
    // recupero un elemento specifico dell'array
    return <IMetro>{}
  }
}
