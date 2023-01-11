import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-iscriviti',
  templateUrl: './form-iscriviti.component.html',
  styleUrls: ['./form-iscriviti.component.css']
})
export class FormIscrivitiComponent implements OnInit {
  nome_modello:any
  email_modello:any
  password_modello:any
  provincia_modello:any
  provincie : any
  constructor() {
    this.provincie= [
      {valore:'MI' , nome : 'Milano'},
      {valore:'BO' , nome : 'Bologna'},
      {valore:'NA' , nome : 'Napoli'},
      {valore:'CT' , nome : 'Catania'},
    ]
  }

  ngOnInit(): void {
    this.nome_modello="Davide"
  }

  invio(form:NgForm){
    console.log("tutto il form : " + JSON.stringify(form.value))
    console.log("form.control.value : " , form.control.value)
    console.log("Nome : " , form.control.value.Nome)
    console.log("Email : " +  form.control.value.Email)
    console.log("Password : " +  form.control.value.Password)
    console.log("Provincia1 : " +  form.control.value.Provincia1)
  }

}
