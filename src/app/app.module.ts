import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { LuciStanzaComponent } from './Component/luci-stanza/luci-stanza.component';
import { ModificareIlDomComponent } from './Component/modificare-il-dom/modificare-il-dom.component';
import { DatePipeComponent } from './Component/date-pipe/date-pipe.component';
import { TimeLeftTrainPipe } from './pipe/time-left-train.pipe';
import { NewsComponent } from './Component/news/news.component';
import { TastieraComponent } from './Component/tastiera/tastiera.component';
import { MetroComponent } from './Component/treno/metro/metro.component';
import { TrenoComponent } from './Component/treno/treno.component';
import { DettaglioTrenoComponent } from './Component/treno/dettaglio-treno/dettaglio-treno.component';
import { PopupComponent } from './Component/popup/popup.component';
import { LoginComponent } from './Component/login/login.component';
import { PreferitiComponent } from './Component/preferiti/preferiti.component';
import { TestngComponent } from './Component/testng/testng.component';
import { Error404Component } from './Component/error404/error404.component';
import { TrenoGialloComponent } from './Component/treno/treno-giallo/treno-giallo.component';
import { TrenoRossoComponent } from './Component/treno/treno-rosso/treno-rosso.component';
import { DettaglioComponent } from './Component/treno/dettaglio/dettaglio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LuciStanzaComponent,
    ModificareIlDomComponent,
    DatePipeComponent,
    TimeLeftTrainPipe,
    NewsComponent,
    TastieraComponent,
    MetroComponent,
    TrenoComponent,
    DettaglioTrenoComponent,
    PopupComponent,
    PreferitiComponent,
    LoginComponent,
    TestngComponent,
    Error404Component,
    TrenoRossoComponent,
    TrenoGialloComponent,
    DettaglioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
