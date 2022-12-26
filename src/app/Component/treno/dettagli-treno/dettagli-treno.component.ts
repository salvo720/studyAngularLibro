import { Component, Input, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';

@Component({
  selector: 'app-dettagli-treno',
  templateUrl: './dettagli-treno.component.html',
  styleUrls: ['./dettagli-treno.component.css']
})
export class DettagliTrenoComponent implements OnInit {

  @Input() treno:IMetro | undefined
  constructor() { }

  ngOnInit(): void {
  }

  chiudi () : void {
  this.treno = undefined;
  }

}
