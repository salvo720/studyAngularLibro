import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';

@Injectable({
  providedIn: 'root',
})
export class TreniService {
  private apiGetUrlListaTreni = '/api/apitreno';
  constructor( private http : HttpClient) {}

  getListaMetroObservable():Observable<IMetro[]>{
    return this.http.get<IMetro[]>(this.apiGetUrlListaTreni).pipe(
      map(
        (risposta:IMetro[])=> risposta['data']) , catchError(this.handleErrorObs)
    );
  }

  getDettaglioMetroObservable(idt:string):Observable<IMetro>{
    return this.http.get<IMetro>(this.apiGetUrlListaTreni + '?idt=' + idt).pipe(
      map(
        (risposta:any)=> risposta['data']) , catchError(this.handleErrorObs)
    );

  }


  private handleErrorObs(error:any){
    return throwError(error.message || error);
  }


  getDettaglioMetro(id:string): IMetro {
    // recupero un elemento specifico dell'array
    return <IMetro>{}
  }
}
