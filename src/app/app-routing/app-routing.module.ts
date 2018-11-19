import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { SignupComponent } from "../components/auth/signup/signup.component";
import { TreinoComponent } from "../components/treino/treino.component";
import { LoginComponent } from "../components/auth/login/login.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "registrar", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "treino", component: TreinoComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
