import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  linkNav : Array<string> ;

  constructor() {
    this.linkNav = [ 'Treni' , 'Preferiti' , 'Login' ];
   }

  ngOnInit(): void {
  }

}
