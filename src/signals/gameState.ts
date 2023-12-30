import {signal} from '@preact/signals-react'
import { generateBoard } from '../scripts/generateBoard';
import calculateCandidate from '../scripts/calculateCandidate';

export const toBeChangedDifficulty = signal<number>(-1);

export const difficulty = signal<number>(40);

export const board = signal<number[]>(generateBoard(9, 40));

export const fillableCells = signal<boolean[]>(board.peek().map(item => item === -1 ? true : false));

export const selectedCell = signal<number>(-1); // the cell index being selected

export const candidates = signal<Map<number, number[]>>(calculateCandidate());

export const showCandidates = signal<boolean>(false);

// export const gameHistory = signal<number[]>([]);
// effect(() => console.log(gameHistory.value));