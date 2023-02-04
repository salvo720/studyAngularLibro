import { Subscription, map, catchError } from 'rxjs';
import { LoginService } from './../../service/login/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup
  error:string

  constructor(private fb: FormBuilder , private loginService:LoginService) {
    this.formLogin = this.fb.group({
      Email : ['asdasdadas', [Validators.required, Validators.maxLength(50)]],
      Password : ['asasdasdad', [Validators.required, Validators.maxLength(50), Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
  }


  InvioFormLogin():Subscription{
   return this.loginService.login(this.formLogin.value).subscribe(
      map((risposta:any) => { console.log('rispsota : ' , risposta); return risposta['data']}),
      error => catchError(error)
    )
  }

  // getter form

  get email(): FormControl{
    return this.formLogin.get('email') as FormControl
  }

  get password(): FormControl{
    return this.formLogin.get('password') as FormControl
  }


}
