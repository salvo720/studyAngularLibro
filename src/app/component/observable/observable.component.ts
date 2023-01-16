import { TreniService } from 'src/app/service/treni/treni.service';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, fromEvent, Subscriber } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  [x: string]: any;
  listametro: any;
  errorMsg: any;
  count: number;
  clickSubscriber
  // clickSubscriber:Subscriber<any>

  constructor(private treniService: TreniService) {
    this.count = 0;
  }

  ngOnInit(): void {
    this.EventListenerClickDocument();
  }

  // Observable : e un tipo di risposta che emette valori ( dati o eventi ) nel tempo

  // ogni volta che tra le righe del nostro programma incontrimao un Observable e come se leggendo un istruzione simile a :

  //  dove dati e l'observable
  // let dati = function () {}

  // let result = dati()
  // nel caso dell'observable per richiamarlo dobbiamo effettualre l'operazione di subscribe
  // let dati$ = ....
  // let subscribe = dati$.subscribe();

  creazioneObservable() {
    // definiamo un observable :
    // quando definiamo un observale al nome segue il simbolo del dollaro

    // definzione observable
    let listametro$: Observable<IMetro[]>;

    listametro$ = this.treniService.getListaMetroObservable();
    listametro$.subscribe(
      (risp) => (this.listametro = risp),
      (error) => (this.errorMsg = error)
    );
  }

  EventListenerClickDocument() {
     // monitoro i click sul documento , codice esempio javascript :
    let eventi = document.addEventListener('click', (e)=>{ console.log('eventi da addEventListener',e)});

    // monitoro i click sul documento , codice esempio angular   :
    let streamclick$: Observable<Event> = fromEvent(document, 'click');
    setInterval(() => {
      this.count++;
      console.log('setInterval ogni 2 secondi ', this.count);
      if (this.count === 3) {
        this.clickSubscriber = streamclick$.subscribe(
          (value) => console.log('ho cliccato'), //obbligatorio
          (err) => console.log(),
          () => console.log()
        );
      }
    }, 2000);
  }

  // ---------------------------------------------------------------------------------------------

  /*
  Class Observable<T> implements Subscribable {
    static create : Function
    static if : typeof if
    static throw : typeof ThrowError
    subscribe(
      observerOrNext? : NextObServer<T> |
      ErrorObserver<T> |
      CompletionObserver<T> |
      ((value : T) => void),
      error?:(error:any)=> void ,
      complete?: ()=> void):Subscription ...
  }

  un observer e fondamentale su un observable , perche sara la funzione di callback sull'Observable .
  Generalmnete su angular si passano 3 funzioni ognuna adibita a compiti specifici : 1) ricezione , 2) errore , 3) completamento

  ((value : T) => void),
    error?:(error:any)=> void ,
    complete?: ()=> void):Subscription
  */

  // ---------------------------------------------------------------------------------------------------

  ngOnDestroy(){
    this.clickSubscriber.unsubscribe();
  }

}
