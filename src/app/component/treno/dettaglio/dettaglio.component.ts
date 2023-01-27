import { CMessaggio } from './../../../model/class/messaggio/cmessaggio';
import { ChatService } from './../../../service/chat/chat.service';
import {
  Observable,
  catchError,
  map,
  tap,
  switchMap,
  of,
  Subscription,
  debounceTime,
  retry,
} from 'rxjs';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';
import { TreniService } from 'src/app/service/treni/treni.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

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

  filtraChat: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private treniService: TreniService,
    private chatService: ChatService,
    private fb: FormBuilder
  ) {
    this.filtraChat = this.fb.group({
      stringaCercata: ['', [Validators.required, Validators.minLength(3)]],
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
    this.filtraChatOnSubmit();
  }

  getDettaglioMetroObservable(idt: string): Subscription {
    return this.treniService.getDettaglioMetroObservable(idt).subscribe(
      (risp) => (this.treno = risp[0]),
      (error) => (this.errorMsg = error)
    );
  }

  getListaChatObservable(idt: string): Subscription {
    return this.chatService.getListaChatObservable(idt).subscribe(
      (risp: CMessaggio[]) => (this.listaChat = risp),
      (error: any) => (this.errorMsg = error)
    );
  }

  getDettaglioMetro(idtr: string) {
    this.treno = this.treniService.getDettaglioMetro(idtr);
  }

  // 1) costruisco l'oggeto messaggio con i dati noti
  invioMsg(testoMsg: string): void {
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
  sendMsgObservable(msg: CMessaggio): Subscription {
    return this.chatService.sendChatMsgObservable(msg).subscribe(
      // la riga successiva e per aggiornare il contenitore dei dati senza agiornare la pagina
      (risposta) => this.listaChat.push(risposta[0]),
      (error) => (this.errorMsg = error)
    );
  }
  filtraChatOnSubmit() {
    return this.stringaCercata.valueChanges.pipe(
        // retry serve per gestire gli errori , e ripete la richiesta per il numero di volte indicato
        // nel caso di un errore il subscribe originale viene perso ma con retry viene effettuato nuovamente il subscribe
        // se dopo le due richieste di retry + quella base , quindi per un totale di 3 , ad esempio la connessione non e tornata
        // si passa alla visualizzazione dell'errore della funzione subscribe
        retry(2),
        debounceTime(300), //elimina le richieste emesse prima di un certo tempo minimo , in questo caso 0,3 sec riducendo le richieste inviate
        switchMap((str: string) =>
          this.chatService.getListaChatObservable(this.idtreno, str)
        )
      ).subscribe(
        (risp: any) => (this.listaChat = risp),
        (error: any) => alert('Qualcosa e andato storto ' + error)
      );
  }

  // getter del form

  get stringaCercata(): FormControl {
    return this.filtraChat.get('stringaCercata') as FormControl;
  }
}
