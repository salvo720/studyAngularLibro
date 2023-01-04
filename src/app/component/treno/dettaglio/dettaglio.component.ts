import { Observable } from 'rxjs';
import { IMetro } from 'src/app/model/interfaces/metro/imetro';
import { TreniService } from 'src/app/service/treni/treni.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css'],
})
export class DettaglioComponent implements OnInit {
  idtreno: string;
  menuBack : string;
  treno : IMetro
  errorMsg;
  constructor(private route: ActivatedRoute , private treniService:TreniService) {
  }

  ngOnInit(): void {
    this.idtreno = this.route.snapshot.paramMap.get('id')!;

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


    this.getDettaglioMetroObservable(this.idtreno);
  }


  private getDettaglioMetroObservable(idtr:string) {
    this.treniService.getDettaglioMetroObservable(idtr).subscribe(
        risp => this.treno = risp[0] ,
        error => this.errorMsg = error
      );
  }

  getDettaglioMetro(idtr:string){
   this.treno =  this.treniService.getDettaglioMetro(idtr);
  }

}
