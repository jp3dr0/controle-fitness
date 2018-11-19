import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-parar-treino",
  template: `
    <h1 mat-dialog-title>Você tem certeza?</h1>
    <mat-dialog-content>
      <p>Você já conseguiu {{ passedData.progress }}%</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Sim</button>
      <button mat-button [mat-dialog-close]="false">Não</button>
    </mat-dialog-actions>
  `
})
export class PararTreinoComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}

  ngOnInit() {}
}
