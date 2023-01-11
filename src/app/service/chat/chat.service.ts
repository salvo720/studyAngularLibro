import { CMessaggio } from './../../model/class/messaggio/cmessaggio';
import { catchError, Observable, throwError, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiGetUrlChat = 'api/ApiMessaggiChat';
  private apiPostUrlChat = 'api/ApiMessaggiChat';
  private apiPreferitiUrlChat = 'api/ApiMessaggiChat/';

  constructor(private http: HttpClient) {}

  getListaChatObservable(idt: string) {
    return this.http
      .get<CMessaggio[]>(this.apiGetUrlChat + '?idt=' + idt)
      .pipe(
        map(
          (risposta: CMessaggio[]) => risposta['data'],
          catchError(this.handleErrorObs)
        )
      );
  }

  sendChatMsgObservable(obj: CMessaggio): Observable<CMessaggio> {
    // let options: object = {
    //   idtreno: obj.idt,
    //   idUtente: obj.idu,
    //   messaggio: obj.testo,
    // };
    return this.http
      .post<CMessaggio>(this.apiPostUrlChat, obj)
      .pipe(
        map(
          (risposta: any) => risposta['data'],
          catchError(this.handleErrorObs)
        )
      );
  }

  DeleteListaChatObservable(idChat:number){
    return this.http.delete<CMessaggio>(this.apiPreferitiUrlChat + idChat).pipe(
      map(
        (risposta:any) => console.log(risposta) ,
        catchError(this.handleErrorObs)
      )
    );
  }

  setChatPreferiti(updateStato:CMessaggio) {
      // aggiungendo
      let responseHeader :object = { observe: 'response' }
     return this.http.put<Number>(this.apiPreferitiUrlChat + updateStato.id , updateStato , responseHeader).pipe(
      map( (risposta:any ) => risposta.status) ,
      catchError(this.handleErrorObs)
      );
  }

  private handleErrorObs(error: any) {
    return throwError(error.message || error);
  }
}
