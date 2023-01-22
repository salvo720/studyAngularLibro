import { InfoComponent } from './component/info/info.component';
import { ChatTrenoComponent } from './component/treno/chat-treno/chat-treno.component';
import { TrenoGialloComponent } from './component/treno/treno-giallo/treno-giallo.component';
import { TrenoRossoComponent } from './component/treno/treno-rosso/treno-rosso.component';
import { Error404Component } from './component/error404/error404.component';
import { TestngComponent } from './component/testng/testng.component';
import { LoginComponent } from './component/login/login.component';
import { PreferitiComponent } from './component/preferiti/preferiti.component';
import { TrenoComponent } from './component/treno/treno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioComponent } from './component/treno/dettaglio/dettaglio.component';

const routes: Routes = [
  { path: 'TreniInArrivo', component: TrenoComponent },
  { path: 'TreniInArrivo/Dettaglio', component: ChatTrenoComponent , children : [
    {path: '', redirectTo: 'Errore' , pathMatch:'full'},
    {path: 'Gialla', component: TrenoGialloComponent  },
    {path: 'Rossa', component: TrenoRossoComponent  },
    {path: ':id', component: DettaglioComponent  },
  ] , },
  { path: 'Amici/:id', component: InfoComponent },
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
