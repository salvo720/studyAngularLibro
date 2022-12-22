import { Component, OnInit } from '@angular/core';
import { INews } from 'src/app/model/interfaces/news/inews';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  listaNews : INews[] = []

  constructor() {
    // questo metodo e troppo oneroso perche ogni volta va a creare un oggetto , passiamo direttamente l'oggetto
    // this.listaNews.push(new CNews(  0, 'titolo 0' , 'descrizione 0'))


    this.listaNews.push({ id: 0, titolo:'titolo 0' , descrizione:'descrizione 0'})
    this.listaNews.push({ id: 1, titolo:'titolo 1' , descrizione:'descrizione 1'})
    this.listaNews.push({ id: 2, titolo:'titolo 2' , descrizione:'descrizione 2' , datapubb:new Date('2/11/2022').toDateString()})
  }

  ngOnInit(): void {
  }

}
