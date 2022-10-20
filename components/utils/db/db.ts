import TypeDb from "../../../types/TypeDb";

const db: Array<TypeDb> = [
  {
    id: 1,
    type: "pix",
    amount: 100,
    date: "2022-10-19",
    description: "Pizza com a galera",
    operation: "credit",
  },
  {
    id: 2,
    type: "debit",
    amount: 40,
    date: "2022-10-19",
    description: "Gasolina",
    operation: "debit",
  },
  {
    id: 3,
    type: "ted",
    amount: 150000,
    date: "2022-10-18",
    description: "Salário",
    operation: "credit",
  },
  {
    id: 4,
    type: "ted",
    amount: 150,
    date: "2022-10-18",
    description: "Salão de Beleza",
    operation: "credit",
  },
  {
    id: 5,
    type: "ted",
    amount: 80,
    date: "2022-10-18",
    description: "Mercado",
    operation: "credit",
  },
  {
    id: 6,
    type: "ted",
    amount: 300,
    date: "2022-10-18",
    description: "Frutaria",
    operation: "credit",
  },
  {
    id: 7,
    type: "ted",
    amount: 90,
    date: "2022-10-18",
    description: "Padaria",
    operation: "credit",
  },
  {
    id: 8,
    type: "Debit",
    amount: 700,
    date: "2022-10-18",
    description: "Cursos",
    operation: "debit",
  },
  {
    id: 9,
    type: "ted",
    amount: 1000,
    date: "2022-10-18",
    description: "Passeio",
    operation: "credit",
  },
  {
    id: 10,
    type: "Pix",
    amount: 2000,
    date: "2022-10-18",
    description: "Ajuda pra Mamãe",
    operation: "pix",
  },

];

export default db;