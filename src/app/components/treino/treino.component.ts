import { Subscription } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { TreinoService } from "src/app/services/treino.service";

@Component({
  selector: "app-treino",
  templateUrl: "./treino.component.html",
  styleUrls: ["./treino.component.css"]
})
export class TreinoComponent implements OnInit {
  treinoAcontecendo: boolean;
  exercicioSubscription: Subscription;

  constructor(private treinoService: TreinoService) {}

  ngOnInit() {
    this.treinoAcontecendo = false;
    this.exercicioSubscription = this.treinoService.exercicioAtualMudou.subscribe(
      exercicio => {
        if (exercicio) this.treinoAcontecendo = true;
        else this.treinoAcontecendo = false;
      }
    );
  }
}
