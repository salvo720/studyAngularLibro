import { CMessaggio } from './../../../model/class/messaggio/cmessaggio';
import { ChatService } from './../../../service/chat/chat.service';
import { Observable, catchError , map , tap } from 'rxjs';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';
import { TreniService } from 'src/app/service/treni/treni.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css'],
})
export class DettaglioComponent implements OnInit {
  idtreno: string;
  menuBack: string;
  treno: IMetro;
  errorMsg;
  listaChat: CMessaggio[];
  chatMsg: CMessaggio;

  filtraChat : FormGroup
  constructor(
    private route: ActivatedRoute,
    private treniService: TreniService,
    private chatService: ChatService,
    private fb:FormBuilder
  ) {
    this.filtraChat = this.fb.group({
      stringaCercata : ['', [Validators.required ,Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.idtreno = this.route.snapshot.paramMap.get('id')!;
    this.getDettaglioMetroObservable(this.idtreno);

    //oppure in alternativa su un evento
    /*
    this.route.paramMap.subscribe(params =>{
      this.idtreno = params.get('id')!;
      // se vogliamo che l'id sia di tipo numerico ci basta aggiungere l'operatore +
      this.idtreno = +params.get('id')!;
    })
    */
    //  Nb : la Route intercetta eventuali valori id nulli , quindi idtreno
    // sara sempre valorizzato non null

    this.getListaChatObservable(this.idtreno);
  }

  getDettaglioMetroObservable(idt: string) {
    this.treniService.getDettaglioMetroObservable(idt).subscribe(
      (risp) => (this.treno = risp[0]),
      (error) => (this.errorMsg = error)
    );
  }

  getListaChatObservable(idt: string) {
    return this.chatService.getListaChatObservable(idt).subscribe(
      (risp) => (this.listaChat = risp),
      (error) => (this.errorMsg = error)
    );
  }

  getDettaglioMetro(idtr: string) {
    this.treno = this.treniService.getDettaglioMetro(idtr);
  }

  // 1) costruisco l'oggeto messaggio con i dati noti
  invioMsg(testoMsg: string) {
    // utente di test generico impostao a 99 , e idm impostato a 0
    this.chatMsg = {
      id: 0,
      idm: '0',
      idt: this.idtreno,
      idu: '99',
      testo: testoMsg,
      stato: 0,
    };

    this.sendMsgObservable(this.chatMsg);
  }

// 2) Attendo che l'api risponda con con oggetto messaggio
  sendMsgObservable(msg : CMessaggio){
    this.chatService.sendChatMsgObservable(msg).subscribe(
      // la riga successiva e per aggiornare il contenitore dei dati senza agiornare la pagina
        risposta => this.listaChat.push(risposta[0]),
        error => this.errorMsg = error
    );
  }
  filtraChatOnSubmit(){
    return this.chatService.getListaChatObservable(this.idtreno).pipe(
      tap(dati => console.log(this.filtraChat.get('stringaCercata'))),
      map((dati => this.listaChat = dati.filter(this.filtraChat.get('stringaCercata')))),
      error => this.errorMsg = error
    );

  }
}
