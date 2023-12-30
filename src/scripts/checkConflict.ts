import { board, selectedCell } from '../signals/gameState'
import isInterfered from './checkInterference'

export default function hasConflict(targetIndex: number) : boolean {
    if (!isInterfered(selectedCell.value, targetIndex)) return false;

    if (targetIndex === selectedCell.value) return true;
    if (board.value[targetIndex] === board.value[selectedCell.value]) return true;

    return false;
}