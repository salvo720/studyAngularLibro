import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-observable-tipi-differenti',
  templateUrl: './observable-tipi-differenti.component.html',
  styleUrls: ['./observable-tipi-differenti.component.css']
})
export class ObservableTipiDifferentiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.TipiObservable();
  }

  TipiObservable() {
    /*
    Tipi di observable :
    1) Observable : unicast , crea una copia dei dati
    2) Subject : multicast , condivide i dati , non emette alcun valore iniziale agli iscritti
    3) BehaviorSubject : multicast , condivide i dati , richiede un valore iniziale ed emette il valore corrente ( ultimo elemento emesso )
      per i nuovi abbonati , anche dopo che e stato emesso
    4) AsyncSubject : multicast , condivide i dati , emette l'ultimo valore per gli iscritti al completamento
    5) ReplaySubject : multicast , condivide i dati , emette un numero specifico di ultimi valori emessi ( un replay ) per i nuovi iscritti
    */


    // ---------------------- subject ------------------------------------------------------------

    const subject$ = new Subject();  // Definisco un observble hot
    // Definisco un observable hot con valore iniziale a 0
    const behaviorSubject$ = new BehaviorSubject(0);
    subject$.subscribe({
      next: (v) => console.log(`1 abbonato subject : ${v}`)
    });

    subject$.next(1);
    subject$.next(2);

    subject$.subscribe({
      next: (v) => console.log(`2 abbonato subject : ${v}`)
    });


    subject$.next(3);

    // ---------------------- behaviorSubject ------------------------------------------------------------

    behaviorSubject$.subscribe({
      next: (v) => console.log(`1 abbonato behaviorSubject : ${v}`)
    });


    behaviorSubject$.next(1);
    behaviorSubject$.next(2);

    behaviorSubject$.subscribe({
      next: (v) => console.log(`2 abbonato behaviorSubject : ${v}`)
    });


    behaviorSubject$.next(3);

    // recupero l'ultimo valore emesso dal behaviorSubject grazie al metodo getValue()
    let lastValue = behaviorSubject$.getValue();
    console.log(`lastValue : ${lastValue}`)


  }

  floatMapFunction() {
    /*
    flatMap()
    // flatMap nasce per l'esigenza di non dover concatenare piu subscribe e rendere il codice piu leggibile, esempio :
    // l'azione di subscribe dell'observable piu esterno  fa partire anche il subscribe per tutti gli observable interni ,
    // garantendo l'intercettazione di tutti i dati

    this.dati.ordiniSubject$.subscribe(
      num=> { this.http.get('/giacenza/' + num['id'])
      .subscribe(res=> this.rim=res )
    });

    utilizzando flatMap():
     this.dati.ordiniSubject$.pipe(
      flatMap(num=> this.http.get('/giacenza/' + num['id'])).subscribe(res => this.rim = res )
     );

    */
  }

  SwitchMapFunction(){
    /*
    switchMap()
    // switchMap si usa njell'ambito della trasformazione dei flussi , di piu Observble , la peculiarita di switchMap() rispetto a flatMap() :
    possiamo commutare switch ad un Observable interno , cancellando l'iscrizione precedente .
    L'operazione di cancellazione e fatta in automatico , non appena arriva un nuovo flusso dall'Observable piu esterno .
    Non dobbiamo pertanto preoccuparci di cancellare alcuna iscrizione
    e stato usato sul component dettaglio , nel form di ricerca
    */

  }

}
