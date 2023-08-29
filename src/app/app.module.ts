import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetalheUsuarioComponent } from './components/detalhe-usuario/detalhe-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    EventosComponent,
    ListagemComponent,
    NavbarComponent,
    DetalheUsuarioComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
