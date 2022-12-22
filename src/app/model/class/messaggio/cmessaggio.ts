export class CMessaggio {
  constructor(
    public idm :number ,        // id messaggio
    public idt :string ,        // id treno
    public idu :string  ,       // id utente
    public messaggio:string ,   // testo del messsaggio
    public idd? : string         //identificativo del destinatario (opzionale )
  ){}
}
