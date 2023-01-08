export class CMessaggio {
  constructor(
    public id :number ,        // id field db
    public idt :string ,        // id treno
    public idu :string  ,       // id utente
    public idm :string ,        // id messaggio
    public testo:string ,   // testo del messsaggio
    public stato :number ,         // stato 1= messaggio normale , 0= messaggio nei preferiti
    public idd? : string ,        //identificativo del destinatario (opzionale )

  ){}
}
