import { OrdiniService } from './../../service/ordini/ordini.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit , OnDestroy {
  obsub1:Subscription
  obsub2:Subscription
  prodotto1:string
  prodotto2:string
  constructor(private ordiniService:OrdiniService ) { }


  ngOnInit(): void {
    this.obsub1 = this.ordiniService.dati$.subscribe((num:any)=>{
      this.prodotto1 = num['prodotto']
    });

    setInterval(()=>{
      this.obsub2 = this.ordiniService.dati$.subscribe((num:any)=>{
        this.prodotto2 = num['prodotto']
      });
    }, 4000 );
  }

  ngOnDestroy(): void {
    if(this.obsub1) this.obsub1.unsubscribe();
    if(this.obsub2) this.obsub2.unsubscribe();
  }

}
