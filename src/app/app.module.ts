import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LuciStanzaComponent } from './component/luci-stanza/luci-stanza.component';
import { ModificareIlDomComponent } from './component/modificare-il-dom/modificare-il-dom.component';
import { DatePipeComponent } from './component/date-pipe/date-pipe.component';
import { TimeLeftTrainPipe } from './pipe/time-left-train.pipe';
import { NewsComponent } from './component/news/news.component';
import { TastieraComponent } from './component/tastiera/tastiera.component';
import { MetroComponent } from './component/treno/metro/metro.component';
import { TrenoComponent } from './component/treno/treno.component';
import { DettaglioTrenoComponent } from './component/treno/dettaglio-treno/dettaglio-treno.component';
import { PopupComponent } from './component/popup/popup.component';
import { LoginComponent } from './component/login/login.component';
import { PreferitiComponent } from './component/preferiti/preferiti.component';
import { TestngComponent } from './component/testng/testng.component';
import { Error404Component } from './component/error404/error404.component';
import { TrenoGialloComponent } from './component/treno/treno-giallo/treno-giallo.component';
import { TrenoRossoComponent } from './component/treno/treno-rosso/treno-rosso.component';
import { DettaglioComponent } from './component/treno/dettaglio/dettaglio.component';

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
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
