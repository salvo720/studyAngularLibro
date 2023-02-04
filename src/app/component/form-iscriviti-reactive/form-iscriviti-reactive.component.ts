import { IUtente } from './../../model/interfaces/utente/iutente';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form-iscriviti-reactive',
  templateUrl: './form-iscriviti-reactive.component.html',
  styleUrls: ['./form-iscriviti-reactive.component.css'],
})
export class FormIscrivitiReactiveComponent implements OnInit {
  formIscrizione: FormGroup;
  nomeObs: string;
  utente: IUtente;
  provincie: any
  sesso: any
  constructor(private formInstance: FormBuilder) {
    // inizializzatore form equivale a tante righe di nomecampo = new FormControl('')
    this.formIscrizione = this.formInstance.group({
      // senza validazione
      // Nome:'Davide',
      // se li mettiamo come array sara attiva la validazione del campo con le regole scelte
      nome: ['Davide', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(255)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      provincia: ['', Validators.required],
      catA: [false, Validators.requiredTrue],
      catB: [false, Validators.requiredTrue],
      genere: ['', Validators.required],
    });

    this.provincie = [
      { valore: 'MI', nome: 'Milano' },
      { valore: 'BO', nome: 'Bologna' },
      { valore: 'NA', nome: 'Napoli' },
      { valore: 'CT', nome: 'Catania' },
    ];

    (this.sesso = [
      { valore: 'M', nome: 'Maschile' },
      { valore: 'F', nome: 'Femminile' },
    ]);
  }

  ngOnInit(): void {
    console.log(' nome inserito : ', this.formIscrizione.get('nome')!.value);
    this.formIscrizione
      .get('nome')!
      .valueChanges.subscribe((tasto) =>
        console.log('Tasto premuto : ' + tasto)
      );
    this.updateform();
  }

  // getter nome
  get nome(): FormControl {
    return this.formIscrizione.get('nome') as FormControl;
  }
  get email() {
    return this.formIscrizione.get('email')!;
  }
  get password() {
    return this.formIscrizione.get('password')!;
  }
  get provincia() {
    return this.formIscrizione.get('provincia')!;
  }
  get catA() {
    return this.formIscrizione.get('catA')!;
  }
  get catB() {
    return this.formIscrizione.get('catB')!;
  }
  get genere() {
    return this.formIscrizione.get('genere')!;
  }

  invio() {
    console.log('Dati del form : ' + JSON.stringify(this.formIscrizione.value));
    console.log('  solo dati select  : ', this.formIscrizione.get('provincia')!.value);
    console.log(' catA : ', this.formIscrizione.get('catA')!.value);
    console.log(' catB : ', this.formIscrizione.get('catB')!.value);
    console.log(' catB : ', this.formIscrizione.get('genere')!.value);
    this.utente = this.formIscrizione.value;

    // reset del form dopo aver inviato i dati
    // this.formIscrizione.reset({
    //   nome: '',
    //   email: '',
    //   password: '',
    //   provincia : '',
    // })

    console.log('Nome : ' + this.utente.nome);
    console.log('Email : ' + this.utente.email);
  }

  updateform() {
    // metodo 1 setto solo 1 campo
    // this.nome.setValue('Luca');

    // metodo 2 aggiorno tutti i campi
    //   this.formIscrizione.reset({
    //     nome: 'Luca',
    //     email: 'lucarossi@miaemail.com',
    //     password: 'asd',
    //   })

    //metodo 3 aggiorno parzialmente i campi del form
    this.formIscrizione.patchValue({
      nome: 'Luca',
      email: 'lucarossi@miaemail.com',
      provincia: 'BO',
      catA: true,
      catB: false,
      genere: 'M',
    });
  }
}
