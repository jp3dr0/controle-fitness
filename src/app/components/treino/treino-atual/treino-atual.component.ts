import { TreinoService } from "src/app/services/treino.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material";
import { PararTreinoComponent } from "./parar-treino.component";

@Component({
  selector: "app-treino-atual",
  templateUrl: "./treino-atual.component.html",
  styleUrls: ["./treino-atual.component.css"]
})
export class TreinoAtualComponent implements OnInit {
  //@Output() sairTreino = new EventEmitter();
  progress: number = 0;
  timer;

  constructor(
    private dialog: MatDialog,
    private treinoService: TreinoService
  ) {}

  ngOnInit() {
    this.iniciarOuContinuarTimer();
  }

  iniciarOuContinuarTimer() {
    const step = (this.treinoService.getExercicioAtual().duracao / 100) * 1000;
    this.timer = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, step);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(PararTreinoComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        //this.sairTreino.emit();
        this.treinoService.cancelarExercicio(this.progress);
      } else {
        this.iniciarOuContinuarTimer();
      }
    });
  }
}
