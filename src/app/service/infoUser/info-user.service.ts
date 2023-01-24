import { catchError, map, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAmico } from 'src/app/model/interfaces/amico/iamico';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {
  private apiGetUrl = 'api/ApiUtente/';
  constructor(private http:HttpClient) { }


  getInfoUser(idu:string,citta:string){
    return this.http.get<IAmico[]>(this.apiGetUrl+idu).pipe(
      tap( dato => console.log("Prima : " , dato)),
      map((info:any) => info['amici'].filter(amico => amico.citta == citta)),
      tap( dato => console.log("Dopo : " , dato)),
      catchError(this.handleErrorObs)
    );
  }

  private handleErrorObs(error: any) {
    return throwError(error.message || error);
  }
}
