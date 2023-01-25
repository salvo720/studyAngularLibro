import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-observable-multicast',
  templateUrl: './observable-multicast.component.html',
  styleUrls: ['./observable-multicast.component.css']
})
export class ObservableMulticastComponent implements OnInit , OnDestroy {
  abbonamento1$: Subscription;
  abbonamento2$: Subscription;
  film2$: Observable<number>;
  num2: number;

  constructor() {
    this.num2 = 0;
  }

  ngOnInit(): void {
    this.ObservableFilmMulticast();
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
    this.abbonamento1$ = this.film2$.subscribe((num2) =>
      console.log('1 abbonato Multicast', num2)
    );

    // secondo abbonato , con ritarndo di 5 secondi
    setTimeout(() => {
      this.abbonamento2$ = this.film2$.subscribe((num2) =>
        console.log('2 abbonato Multicast', num2)
      );
    }, 5000);
  }

  ngOnDestroy() {
    if(this.abbonamento1$) this.abbonamento1$.unsubscribe();
    if(this.abbonamento2$) this.abbonamento2$.unsubscribe();
  }
}

