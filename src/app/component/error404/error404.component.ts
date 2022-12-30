import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  // il componte router ci permette di eseguire un redirct su un url
  // il metodo navigate ci permette di otterenere un redirct basato su un evento
  backToHome(){
    this.router.navigate(['/']);
  }

}
