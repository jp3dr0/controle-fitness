import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material";
import { PararTreinoComponent } from "./parar-treino.component";

@Component({
  selector: "app-treino-atual",
  templateUrl: "./treino-atual.component.html",
  styleUrls: ["./treino-atual.component.css"]
})
export class TreinoAtualComponent implements OnInit {
  @Output() sairTreino = new EventEmitter();
  progress: number = 0;
  timer: number;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(PararTreinoComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if (result) {
        this.sairTreino.emit();
      }
    });
  }
}
