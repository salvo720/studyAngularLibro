import { ActivatedRoute } from '@angular/router';
import { InfoUserService } from './../../service/infoUser/info-user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAmico } from 'src/app/model/interfaces/amico/iamico';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit , OnDestroy {
  amiciSub:Subscription
  idu:string
  errorMsg:string
  listaAmici:IAmico[]
  constructor(private infuUserService:InfoUserService,private Route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idu=this.Route.snapshot.paramMap.get('idu')!;
    this.amiciSub = this.infuUserService.getInfoUser(this.idu).subscribe(
      amici => this.listaAmici=amici['amici'],
      error=> this.errorMsg=error,
      () => console.log('Fine')
    );
  }

  ngOnDestroy(): void {
    // this.amiciSub.destroy();  // non worka non viene trovata
    this.amiciSub.unsubscribe();
  }


}
