import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const animation =
  trigger('cambioPagina', [
    transition('start <=> dettaglio', [
      style({ position: 'relative' }),
      // imposto uno stile predefinito in etrata e in uscita
      query(':enter , :leave', style({ position: 'absolute', top: 0, left: 0, width: '100%' })),
      query(':enter', style({ left: '-100%', opacity: 0 })),
      group([
        query(':leave', animate('2500ms ease-out', style({ left: '100%', opacity: 0 }))),
        query(':enter', animate('2500ms ease-in', style({ left: '0%', opacity: 1 })))
      ])
    ])
  ]);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animation],
})
export class AppComponent implements OnInit {

  title = 'studyAngularLibro';

  constructor() { }

  ngOnInit(): void {
    console.log("sono in ngOnInit di AppComponent")
  }

  getStatoAnimazione(outlet: RouterOutlet): RouterOutlet {
    console.log("outlet : ", outlet.activatedRouteData['statoAnim']);
    return outlet.activatedRouteData['statoAnim'];
  }

  getMenuBack(outlet :RouterOutlet){
    return outlet.activatedRouteData['menuBack'];
  }

}
