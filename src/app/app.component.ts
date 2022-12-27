import { Component, ElementRef, ViewChild } from '@angular/core';
import { PopupComponent } from './Component/popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // metodo alternativo viewchild
  // @ViewChild(PopupComponent) msg:PopupComponent

  // non serve perche il componente popupA esegue il metodo del componente figlio
  // @ViewChild('ppA') msgA: PopupComponent;

  @ViewChild('ppB') msgB: PopupComponent;
  // PRATICA SCONGLIATA perche bypassa i controlli XSS
  @ViewChild('ppC') msgC: PopupComponent;
  @ViewChild('miobtn') btn: ElementRef;

  title = 'studyAngularLibro';

  // non serve perche il componente popupA esegue il metodo del componente figlio
  // mostraMsgA() {
  //   this.msgA.mostra();
  // }

  mostraMsgB() {
    this.msgB.mostra();
  }

  // PRATICA SCONGLIATA perche bypassa i controlli XSS
  mostraMsgC() {
    //disattivo il bottone dopo il primo click
    this.btn.nativeElement.disabled = true;
    this.msgC.mostra();
  }
}
