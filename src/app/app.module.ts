import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { ListaMetroComponent } from './Component/lista-metro/lista-metro.component';
import { LuciStanzaComponent } from './component/luci-stanza/luci-stanza.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaMetroComponent,
    LuciStanzaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
