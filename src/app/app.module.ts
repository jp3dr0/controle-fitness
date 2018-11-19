import { AppRoutingModule } from "./modules/app-routing.module";
import { MaterialModule } from "./modules/material.module";
import { PararTreinoComponent } from "./components/treino/treino-atual/parar-treino.component";
import { HomeComponent } from "./components/home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { TreinoComponent } from "./components/treino/treino.component";
import { TreinoAtualComponent } from "./components/treino/treino-atual/treino-atual.component";
import { NovoTreinoComponent } from "./components/treino/novo-treino/novo-treino.component";
import { TreinosAnterioresComponent } from "./components/treino/treinos-anteriores/treinos-anteriores.component";

import { DndModule } from "ngx-drag-drop";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./components/navigation/header/header.component";
import { SidenavListComponent } from "./components/navigation/sidenav-list/sidenav-list.component";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TreinoComponent,
    TreinoAtualComponent,
    NovoTreinoComponent,
    TreinosAnterioresComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    PararTreinoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    DndModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PararTreinoComponent]
})
export class AppModule {}
