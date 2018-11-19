export interface Exercicio {
  id: string;
  nome: string;
  duracao: number;
  calorias: number;
  data?: Date;
  estado?: "completado" | "cancelado" | null;
}
