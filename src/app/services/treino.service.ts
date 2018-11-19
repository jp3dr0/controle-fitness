import { Injectable } from "@angular/core";
import { Exercicio } from "../models/exercicio";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TreinoService {
  exercicioAtualMudou: Subject<Exercicio>;

  private exerciciosDisponiveis: Exercicio[];
  private exercicioAtual: Exercicio;
  private exercicios: Exercicio[];

  constructor() {
    this.exerciciosDisponiveis = [
      { id: "crunches", nome: "Crunches", duracao: 30, calorias: 8 },
      { id: "touch-toes", nome: "Touch Toes", duracao: 180, calorias: 15 },
      { id: "side-lunges", nome: "Side Lunges", duracao: 120, calorias: 18 },
      { id: "burpees", nome: "Burpees", duracao: 60, calorias: 8 }
    ];
    this.exercicios = [];
    this.exercicioAtualMudou = new Subject<Exercicio>();
  }

  getExerciciosDisponiveis() {
    // retorna uma "copia"
    return this.exerciciosDisponiveis.slice();
  }

  getExerciciosCompletadosOuCancelados() {
    // retorna uma "copia"
    return this.exercicios.slice();
  }

  getExercicioAtual() {
    // retorna uma "copia"
    return { ...this.exercicioAtual };
  }

  iniciarExercicio(id: string) {
    this.exercicioAtual = this.exerciciosDisponiveis.find(ex => ex.id === id);
    this.exercicioAtualMudou.next({ ...this.exercicioAtual });
  }

  completarExercicio() {
    this.exercicios.push({
      ...this.exercicioAtual,
      data: new Date(),
      estado: "completado"
    });
    this.exercicioAtual = null;
    this.exercicioAtualMudou.next(null);
  }

  cancelarExercicio(progresso: number) {
    this.exercicios.push({
      ...this.exercicioAtual,
      duracao: this.exercicioAtual.duracao * (progresso / 100),
      calorias: this.exercicioAtual.calorias * (progresso / 100),
      data: new Date(),
      estado: "completado"
    });
    this.exercicioAtual = null;
    this.exercicioAtualMudou.next(null);
  }
}
