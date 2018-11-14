import { AppRoutingModule } from "./app-routing/app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { TreinoComponent } from "./components/treino/treino.component";
import { TreinoAtualComponent } from "./components/treino/treino-atual/treino-atual.component";
import { NovoTreinoComponent } from "./components/treino/novo-treino/novo-treino.component";
import { TreinosAnterioresComponent } from "./components/treino/treinos-anteriores/treinos-anteriores.component";
import { HomeComponent } from "./home/home.component";
import { DndModule } from "ngx-drag-drop";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TreinoComponent,
    TreinoAtualComponent,
    NovoTreinoComponent,
    TreinosAnterioresComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    DndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
