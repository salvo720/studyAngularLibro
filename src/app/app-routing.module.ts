import { DettaglioTrenoComponent } from './Component/treno/dettaglio-treno/dettaglio-treno.component';
import { TrenoGialloComponent } from './Component/treno/treno-giallo/treno-giallo.component';
import { TrenoRossoComponent } from './Component/treno/treno-rosso/treno-rosso.component';
import { Error404Component } from './Component/error404/error404.component';
import { TestngComponent } from './Component/testng/testng.component';
import { LoginComponent } from './Component/login/login.component';
import { PreferitiComponent } from './Component/preferiti/preferiti.component';
import { TrenoComponent } from './Component/treno/treno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioComponent } from './Component/treno/dettaglio/dettaglio.component';

const routes: Routes = [
  { path: 'TreniInArrivo', component: TrenoComponent },
  { path: 'TreniInArrivo/Dettaglio', component: DettaglioTrenoComponent , children : [
    {path: '', redirectTo: 'Errore' , pathMatch:'full'},
    {path: 'Gialla', component: TrenoGialloComponent  },
    {path: 'Rossa', component: TrenoRossoComponent  },
    {path: ':id', component: DettaglioComponent  },
  ] , },
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
