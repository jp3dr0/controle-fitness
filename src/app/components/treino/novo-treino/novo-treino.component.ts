import { NgForm } from "@angular/forms";
import { TreinoService } from "./../../../services/treino.service";
import { Exercicio } from "./../../../models/exercicio";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-novo-treino",
  templateUrl: "./novo-treino.component.html",
  styleUrls: ["./novo-treino.component.css"]
})
export class NovoTreinoComponent implements OnInit {
  exercicios: Exercicio[];

  constructor(private treinoService: TreinoService) {}

  ngOnInit() {
    this.exercicios = this.treinoService.getExerciciosDisponiveis();
  }

  onClickIniciar(form: NgForm) {
    //console.log("iniciar treino");
    //this.iniciarTreino.emit();
    this.treinoService.iniciarExercicio(form.value.exercicioSelect);
  }
}
