import { ChatService } from './../../service/chat/chat.service';
import { CMessaggio } from './../../model/class/messaggio/cmessaggio';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  @Input() msgIn: CMessaggio;
  errorMsg;
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {}

  setMsgPreferiti(idChat: number, idm: string, newStato: number) {
    //recupero lo stto attuale per reimpostarlo in caso di errore
    let statoprec: number = this.msgIn.stato;
    this.msgIn.stato = newStato;
    let testoprec: string = this.msgIn.testo;
    let idtprec: string = this.msgIn.idt;

    let UpdateStato: CMessaggio = {
      'id': idChat,
      'idu': '99',
      'idt': idtprec,
      'idm': idm,
      'stato': newStato,
      'testo': testoprec,
    };

    this.chatService.setChatPreferiti(UpdateStato).subscribe(
      // commentato perche non worka this.msgIn.stato = statoprec;
      (risp:any) => {
        if (risp != 204 && 200) { // status code  put reqeust e ok
          // risposta negativa dal server si e verificato un errore
          console.log('Errore , nella richiesta risposta negativa dal server si e verificato un errore  ');
          // this.msgIn.stato = statoprec;
        } else {
          console.log('Ok , richiesta mandata e risposta positiva dal server ');
          // this.msgIn.stato = newStato;
        }
      },
      (error) => (this.errorMsg = error)
    );
  }

  deleteMsg(idChat:number){
    this.chatService.DeleteListaChatObservable(idChat).subscribe(
      (risp:any) => {
        console.log("ciao")
        if (!risp ) {
          // risposta negativa dal server si e verificato un errore
          alert('Errore');
        } else {
          alert('Ok');
        }
      },
      (error) => (this.errorMsg = error)
    );
  }
}
