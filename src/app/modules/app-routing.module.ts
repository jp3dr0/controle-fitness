import { TreinoAtualComponent } from "./../components/treino/treino-atual/treino-atual.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { SignupComponent } from "../components/auth/signup/signup.component";
import { TreinoComponent } from "../components/treino/treino.component";
import { LoginComponent } from "../components/auth/login/login.component";
import { AuthGuard } from "../guards/auth.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "registrar", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "treino", component: TreinoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
