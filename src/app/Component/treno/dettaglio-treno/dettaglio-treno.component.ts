import { Component, Input, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';

@Component({
  selector: 'app-dettaglio-treno',
  templateUrl: './dettaglio-treno.component.html',
  styleUrls: ['./dettaglio-treno.component.css'],
})
export class DettaglioTrenoComponent implements OnInit {
  menuBack: string;

  constructor() {}

  ngOnInit(): void {
    this.menuBack = 'ON';
  }
}
