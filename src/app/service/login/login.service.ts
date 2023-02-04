import { FormGroup } from '@angular/forms';
import { IUtente } from './../../model/interfaces/utente/iutente';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlLogin: string
  error: string

  constructor(private http: HttpClient) {
    this.urlLogin = 'login/login'
  }

  login(loginForm: IUtente) {
    return this.http.post<Observable<IUtente>>(this.urlLogin, loginForm).pipe(
      map((risposta: any) => risposta),
      catchError(this.handlerErrorObs)
    );
  }

  handlerErrorObs(error: any) {
    return throwError(error.message | error)
  }

}
