import { catchError, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAmico } from 'src/app/model/interfaces/amico/iamico';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {
  private apiGetUrl = 'api/ApiUtente/';
  constructor(private http:HttpClient) { }


  getInfoUser(idu:string){
    return this.http.get<IAmico[]>(this.apiGetUrl+idu).pipe(
      map((info:any) => info['amici']),
      catchError(this.handleErrorObs)
    );
  }

  private handleErrorObs(error: any) {
    return throwError(error.message || error);
  }
}
