import { Output, EventEmitter } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-novo-treino",
  templateUrl: "./novo-treino.component.html",
  styleUrls: ["./novo-treino.component.css"]
})
export class NovoTreinoComponent implements OnInit {
  @Output() iniciarTreino = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClickIniciar() {
    console.log("iniciar treino");
    this.iniciarTreino.emit();
  }
}
