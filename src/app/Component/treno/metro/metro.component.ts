import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';

@Component({
  selector: 'app-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css'],
})
export class MetroComponent implements OnInit {
  @Input() datiIn: IMetro;
  @Input('ora') ora: number;
  // marchio la propieta inPartenza , come D'uscita
  @Output() inPartenza = new EventEmitter<string>();

  stato: object;
  oraPartenza: number;
  attesa: number;
  constructor() {}

  ngOnInit(): void {
    console.log('ora :' + this.ora);

    this.oraPartenza = this.datiIn.tempo;
    //tempo mancante alla partenza
    this.attesa = this.oraPartenza - this.ora;
    let x = setInterval(()=>{
      this.attesa -= 1000;
      // console.log('this.oraPartenza :' + this.oraPartenza);

      if(this.attesa<=0){
        // blocco il timer e mando l'evento in uscita
        clearInterval(x);
        //notifico il cambio di dato passando l'id del treno
        this.inPartenza.emit(this.datiIn.idt);
        //modifico lo stato di visualizzazione del componente
        this.stato= {'display':'none'};
      }
    } , 1000 );
  }
}
