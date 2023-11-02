import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { VagasComponent } from './vagas/vagas.component';
import { CurriculosComponent } from './curriculos/curriculos.component';
import { FooterComponent } from './basic/footer/footer.component';
import { HeaderComponent } from './basic/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PainelVagasComponent } from './painel-vagas/painel-vagas.component';
import { NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    VagasComponent,
    CurriculosComponent,
    FooterComponent,
    HeaderComponent,
    PainelVagasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }