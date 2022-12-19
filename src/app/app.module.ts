import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { ListaMetroComponent } from './Component/lista-metro/lista-metro.component';
import { LuciStanzaComponent } from './Component/luci-stanza/luci-stanza.component';
import { ModificareIlDomComponent } from './Component/modificare-il-dom/modificare-il-dom.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaMetroComponent,
    LuciStanzaComponent,
    ModificareIlDomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
