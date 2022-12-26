import { Component, Input, OnInit } from '@angular/core';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';

@Component({
  selector: 'app-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css']
})
export class MetroComponent implements OnInit {


  @Input() datiIn:IMetro;
  @Input('ora') ora:number;
  constructor() { }

  ngOnInit(): void {
    console.log('ora :' + this.ora)
  }



}
