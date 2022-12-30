import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificare-il-dom',
  templateUrl: './modificare-il-dom.component.html',
  styleUrls: ['./modificare-il-dom.component.css']
})
export class ModificareIlDomComponent implements OnInit {
  Paragraph1Style : object
  Paragraph2Style : string
  StyleWeight : number
  Paragraph1Class : string
  Paragraph2ClassArray : string[]
  Paragraph2ClassObject : object
  textCenter : boolean
  lightBlue : boolean
  constructor() {
    this.Paragraph1Style = { 'font-size' : '14px' , 'color' : 'darkcyan' } ;
    this.Paragraph2Style = '14px' ;
    this.StyleWeight = 600 ;
    this.Paragraph1Class = 'text-center light-blue' ;
    this.Paragraph2ClassArray = ['text-center' , 'light-blue'] ;
    this.textCenter = true
    this.lightBlue = false ;
    this.Paragraph2ClassObject = { 'text-center' : this.textCenter , 'light-blue' : this.lightBlue }
   }

  ngOnInit(): void {
  }

}
