import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-observable-unicast',
  templateUrl: './observable-unicast.component.html',
  styleUrls: ['./observable-unicast.component.css']
})
export class ObservableUnicastComponent implements OnInit , OnDestroy{
  film$: Observable<number>;
  abbonamento1:Subscription
  abbonamento2:Subscription

  constructor() { }

  ngOnInit(): void {
    this.ObservableFilmUnicast();
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
    this.abbonamento1 = this.film$.subscribe((num) =>
      console.log('1 abbonato Unicast', num)
    );

    // secondo abbonato , con ritarndo di 5 secondi
    setTimeout(() => {
      this.abbonamento2 = this.film$.subscribe((num) =>
        console.log('2 abbonato Unicast', num)
      );
    }, 5000);
  }

  ngOnDestroy(): void {
    if(this.abbonamento1) this.abbonamento1.unsubscribe();
    if(this.abbonamento2) this.abbonamento2.unsubscribe();
  }

}
