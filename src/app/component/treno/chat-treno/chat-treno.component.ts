import { Component, Input, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';

@Component({
  selector: 'app-chat-treno',
  templateUrl: './chat-treno.component.html',
  styleUrls: ['./chat-treno.component.css'],
})
export class ChatTrenoComponent implements OnInit {
  menuBack: string;

  constructor() {}

  ngOnInit(): void {
    this.menuBack = 'ON';
  }
}
