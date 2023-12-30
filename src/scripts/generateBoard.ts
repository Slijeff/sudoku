import Sudoku from "./sudokugen";

export const generateBoard = (n: number, k: number) =>
  new Sudoku(n, k)
    .fillValues()
    .mat.flat()
    .map((item) => (item === 0 ? -1 : item));
