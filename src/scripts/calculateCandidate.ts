import { board, fillableCells } from "../signals/gameState";
import checkInterference from "./checkInterference";

// calculate candidates for each fillable cell
export default function calculateCandidate() : Map<number, number[]> {

    let m = new Map<number, number[]>();
    const numSet = new Set([1,2,3,4,5,6,7,8,9]);

    for (let i = 0; i < fillableCells.value.length; i++) {
        if (!fillableCells.value[i]) continue;

        let existingNums = new Set<number>();
        for (let j = 0; j < board.value.length; j++) {
            if (!checkInterference(i, j)) continue;
            existingNums.add(board.value[j]);
        }

        let intersection = new Set([...numSet].filter(k => !existingNums.has(k)));
        m.set(i, Array.from(intersection));
    }
    return m;
}