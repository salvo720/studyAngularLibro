import { Observable, catchError, Subscription , map } from 'rxjs';
import { ChatService } from './../../service/chat/chat.service';
import { CMessaggio } from './../../model/class/messaggio/cmessaggio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent implements OnInit {
  listaChatPreferiti: CMessaggio[]
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.getListaChatPreferiti();
  }




  getListaChatPreferiti(): Subscription {
    return this.chatService.getListaChatPreferiti().subscribe(
      (risp:CMessaggio[]) => { this.listaChatPreferiti = risp },
      error => catchError(error)
    )
  }

}
