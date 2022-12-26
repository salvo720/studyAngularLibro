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
import { TastieraComponent } from './Component/tastiera/tastiera/tastiera.component';
import { MetroComponent } from './Component/metro/metro.component';
import { TrenoComponent } from './Component/treno/treno.component';
import { DettagliTrenoComponent } from './Component/treno/dettagli-treno/dettagli-treno.component';

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
    DettagliTrenoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
