import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CabVendaService } from './Servicos/CabVendaService';
import { DetVendaService } from './Servicos/DetVendaService';
import { CategoriaService } from './Servicos/CategoriaService';
import { LocalStorageService } from './Servicos/LocalStorageService';
import { PrecoService } from './Servicos/PrecoService';
import { ProdutosService } from './Servicos/ProdutosService';
import { UsuarioService } from './Servicos/UsuarioService';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteModule } from './app.route.module';

import { LoginComponent } from './Views/Login/login.component';
import { IndexComponent } from './Views/Index/index.component';
import { RegisterComponent } from './Views/Register/register.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRouteModule
  ],
  providers: [
    CabVendaService,
    DetVendaService,
    CategoriaService,
    LocalStorageService,
    PrecoService,
    ProdutosService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
