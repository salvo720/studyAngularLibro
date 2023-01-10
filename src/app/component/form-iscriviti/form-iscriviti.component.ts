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
  constructor() { }

  ngOnInit(): void {
  }

  invio(form:NgForm){
    console.log("tutto il form : " + JSON.stringify(form.value))
    console.log("Nome : " , form.control.value)
    console.log("Nome : " , form.control.value.Nome)
    console.log("Email : " +  form.control.value.Email)
    console.log("Password : " +  form.control.value.Password)
  }

}
