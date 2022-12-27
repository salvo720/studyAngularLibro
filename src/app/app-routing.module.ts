import { Error404Component } from './Component/error404/error404.component';
import { TestngComponent } from './Component/testng/testng.component';
import { LoginComponent } from './Component/login/login.component';
import { PreferitiComponent } from './Component/preferiti/preferiti.component';
import { TrenoComponent } from './Component/treno/treno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'TreniInArrivo', component: TrenoComponent },
  { path: 'Preferiti', component: PreferitiComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Test', component: TestngComponent },
  // pathmatch , va usato quando vogliamo che il match sia esatto e opzionale
  { path: '', redirectTo: '/TreniInArrivo', pathMatch: 'full' },
  //Le seguenti 2 righe servono per  qulunque rotta non trovata quindi andra nella paggina di errore404
  { path: '**', component: Error404Component },
  { path: '**', redirectTo: '/Errore', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
