import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  mostraMsg: boolean;
  constructor() {
    this.mostraMsg = false;
  }

  ngOnInit(): void {}

  mostra() {
    this.mostraMsg = true;
  }

  nascondi() {
    this.mostraMsg = false;
  }
}
