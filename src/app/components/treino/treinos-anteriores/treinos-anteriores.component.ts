import { Exercicio } from "./../../../models/exercicio";
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatTableDataSource, MatSort } from "@angular/material";
import { TreinoService } from "src/app/services/treino.service";

@Component({
  selector: "app-treinos-anteriores",
  templateUrl: "./treinos-anteriores.component.html",
  styleUrls: ["./treinos-anteriores.component.css"]
})
export class TreinosAnterioresComponent implements OnInit, AfterViewInit {
  displayedColumns = ["data", "nome", "duracao", "calorias", "estado"];
  dataSource = new MatTableDataSource<Exercicio>();
  @ViewChild(MatSort) sort: MatSort;

  constructor(private treinoService: TreinoService) {}

  ngOnInit() {
    this.dataSource.data = this.treinoService.getExerciciosCompletadosOuCancelados();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  filtrar(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();
  }
}
