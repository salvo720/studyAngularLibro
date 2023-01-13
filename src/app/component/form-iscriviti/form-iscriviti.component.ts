import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-iscriviti',
  templateUrl: './form-iscriviti.component.html',
  styleUrls: ['./form-iscriviti.component.css'],
})
export class FormIscrivitiComponent implements OnInit {
  nome_modello: string;
  email_modello: string;
  password_modello: string;
  provincia_modello: string;
  provincie: any;
  catA_modello: boolean;
  catB_modello: boolean;
  sesso: any;
  sesso_modello: string;
  constructor() {
    this.provincie = [
      { valore: 'MI', nome: 'Milano' },
      { valore: 'BO', nome: 'Bologna' },
      { valore: 'NA', nome: 'Napoli' },
      { valore: 'CT', nome: 'Catania' },
    ];
    (this.catA_modello = false),
      (this.catB_modello = true),
      (this.sesso = [
        { valore: 'M', nome: 'Maschile' },
        { valore: 'F', nome: 'Femminile' },
      ]);
  }

  ngOnInit(): void {
    this.nome_modello = 'Davide';
    this.provincia_modello = 'BO';
    this.sesso_modello = 'F';
  }

  invio(form: NgForm) {
    console.log('tutto il form : ' + JSON.stringify(form.value));
    console.log('form.control.value : ', form.control.value);
    console.log('nome : ', form.control.value.nome);
    console.log('email : ' + form.control.value.email);
    console.log('password : ' + form.control.value.password);
    console.log('valore select provincia1 : ' + form.control.value.provincia1);
    console.log('valore checkbox catA_modello : ' + form.control.value.catA);
    console.log('valore checkbox catB_modello : ' + form.control.value.catB);
    console.log('valore radio sesso_modello : ' + form.control.value.sesso);
  }
}
