import { ActivatedRoute } from '@angular/router';
import { InfoUserService } from './../../service/infoUser/info-user.service';
import { Component, Directive, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IAmico } from 'src/app/model/interfaces/amico/iamico';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit, OnDestroy {
  amiciSub: Subscription;
  idu: string;
  errorMsg: string;
  listaAmici: Observable<any>;
  constructor(
    private infuUserService: InfoUserService,
    private Route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.idu = this.Route.snapshot.paramMap.get('id')!;
    // this.amiciSub = this.infuUserService.getInfoUser(this.idu).subscribe(
    //   (amici) => (this.listaAmici = amici),
    //   (error) => (this.errorMsg = error),
    //   () => console.log('Fine')
    // );
    this.listaAmici = this.infuUserService.getInfoUser(this.idu)
  }

  refresh(): void {
    setTimeout( ()=> { window.location.reload()},0.5000)
  }
  ngOnDestroy(): void {
    // this.amiciSub.destroy();  // non worka non viene trovata
    this.amiciSub.unsubscribe();
  }


}
