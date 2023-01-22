import { HttpClient } from '@angular/common/http';
import { TreniService } from 'src/app/service/treni/treni.service';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';
import { Component, OnInit } from '@angular/core';
import {
  Observable,
  catchError,
  fromEvent,
  Subscriber,
  of,
  from,
  observable,
  Subscription,
} from 'rxjs';

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
  clickSubscriber:Subscription
  apiGet: string = 'api/ApiTreno';
  film$: Observable<number>;
  abbonamento1;
  abbonamento2;
  film2$: Observable<number>;
  num2: number;


  constructor(private treniService: TreniService, private http: HttpClient) {
    this.count = 0;
    this.num2 = 0;
  }

  ngOnInit(): void {
    this.creazioneObservable();
    this.EventListenerClickDocument();
    this.ConversioneEventoInObservable();
    this.ConversioneNumeriStringheOggettiInObservable();
    this.ConversioneArrayInObservable();
    this.ConversionePromiseInObservable();
    this.ConversioneObservableInPromise();
    this.CreareUnObservableSenzaOperatori();
    this.ObservableFilmUnicast();
    setTimeout(() => {
      // la parte degli unicast parte 15 secondi dopo per evitoare confusione nella console
      this.ObservableFilmMulticast();
    }, 15000);
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
    /*  // commentato perche e gia gestito da angular e vanno in conflitto
    let eventi = document.addEventListener('click', (e) => {
      console.log('eventi da addEventListener', e);
    });
    */

    // monitoro i click sul documento , codice esempio angular   :

    let streamclick$: Observable<Event> = fromEvent(document, 'click');
    console.log('setInterval ogni 3 secondi ', this.count);
    setInterval(() => {
      this.count++;
      // console.log('setInterval ogni 3 secondi ', this.count); // disattivato perche ogni 3 sec e eccessivo
      if (this.count === 3) {
        this.clickSubscriber = streamclick$.subscribe(
          (value) => console.log('ho cliccato'), //obbligatorio
          (err) => console.log(),
          () => console.log()
        );
      }
    }, 3000);
  }

  // convertire eventi in Observable , Eventi => Obsersavle
  ConversioneEventoInObservable() {
    let clickEvt$: Observable<Event>;
    clickEvt$ = fromEvent(document, 'click');
    clickEvt$.subscribe((x) =>
      console.log('x ConversioneEventoInObservable() : ', x)
    );
  }

  // convertire numeri stringhe oggetti in observable , Numeri,Stringhe,Oggetti => Obsersavle
  ConversioneNumeriStringheOggettiInObservable() {
    let seq$: Observable<string>;
    seq$ = of('on', 'off');
    seq$.subscribe((val) =>
      console.log(
        'Stato ConversioneNumeriStringheOggettiInObservable() : ' + val
      )
    );
  }

  // Convertire array o collection in Observable , Array => Obsersavle
  ConversioneArrayInObservable() {
    let seq$: Observable<string>;
    seq$ = from(['on', 'off', 'off']);
    seq$.subscribe((val) =>
      console.log('Elemento Array ConversioneArrayInObservable() : ' + val)
    );
  }

  // Convertire promise in Observable , Promise => Obsersavle
  ConversionePromiseInObservable() {
    let seq$ = from(fetch(this.apiGet));
    seq$.subscribe((val) =>
      console.log('Dati ConversionePromiseInObservable() : ', val)
    );
  }

  // Converto Observalbe in promise , Obsersavle => Promise
  ConversioneObservableInPromise() {
    this.http
      .get(this.apiGet)
      .toPromise()
      .then((dati) =>
        console.log('Dati ConversioneObservableInPromise() :', dati)
      );
  }

  // Creare un observable senza operatori
  CreareUnObservableSenzaOperatori() {
    // i dati stampadati dai due subscribe sono uguali quindi passando gli stessi dati l'observable ci torna lo stesso risultato ,
    // Cold e hot Obervable o Unicast e multicast e il legame tra sorgente e iscritto :
    // unicast o Cold : ogni singolo utente ha la propia sorgente dati che la trasmette all'occorenza , quindi i dati della sorgente saranno uguali , ad esempio quando si noleggio un video
    // multicast o Hot : la trasmissione e rivolta a piu iscritti contemporaneamente , quindi i dati della sorgente saranno differenti , ad esempio quando si segue un videoin streaming
    let numeriRandom$ = Observable.create((observer) => {
      observer.next(4);
      observer.next(53);
      observer.complete(); //Fine emissione dati
    });

    numeriRandom$.subscribe((val) =>
      console.log('Dati1 CreareUnObservableSenzaOperatori() : ', val)
    );

    setTimeout(() => {
      numeriRandom$.subscribe((val) =>
        console.log(
          'Dati2 CreareUnObservableSenzaOperatori() setTimeout() 5 sec: ',
          val
        )
      );
    }, 5000);
  }

  ObservableFilmUnicast() {
    this.film$ = new Observable<number>((subscriber) => {
      let num = 0;
      console.log('******** Si e iscritto un nuovo abbonato *********');
      setInterval(() => {
        num += 1;
        subscriber.next(num);
        if (num > 10) {
          subscriber.complete();
        }
      }, 1000);
    });

    // primo abbonato
    let abbonamento1 = this.film$.subscribe((num) =>
      console.log('1 abbonato Unicast', num)
    );

    // secondo abbonato , con ritarndo di 5 secondi
    setTimeout(() => {
      let abbonamento2 = this.film$.subscribe((num) =>
        console.log('2 abbonato Unicast', num)
      );
    }, 5000);
  }

  ObservableFilmMulticast() {
    this.film2$ = new Observable<number>((subscriber) => {
      setInterval(() => {
        this.num2 += 1;
        subscriber.next(this.num2);
        if (this.num2 > 10) {
          subscriber.complete();
        }
      }, 1000);
    });

    // primo abbonato
    let abbonamento1 = this.film2$.subscribe((num2) =>
      console.log('1 abbonato Multicast', num2)
    );

    // secondo abbonato , con ritarndo di 5 secondi
    setTimeout(() => {
      let abbonamento2 = this.film2$.subscribe((num2) =>
        console.log('2 abbonato Multicast', num2)
      );
    }, 5000);
  }

  // Operatori pipe() , map() , tap(), filter()
  OperatoriPipeMapTapFilter(){


  }

  // ---------------------------------------------------------------------------------------------

  /* Classe docs
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

  ngOnDestroy() {
    //  this.clickSubscriber.unsubscribe();  // commentato perche genera un errore se si cambia la pagina prima che gli observable finiscano
  }
}
