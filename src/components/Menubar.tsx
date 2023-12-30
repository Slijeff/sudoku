import { FunctionComponent } from "react";
import { board, candidates, fillableCells, selectedCell, showCandidates } from "../signals/gameState";
import { useSignals } from "@preact/signals-react/runtime";
import calculateCandidate from "../scripts/calculateCandidate";

interface MenubarProps {
    
}
 
const Menubar: FunctionComponent<MenubarProps> = () => {

    useSignals();
    const clearFilled = () => {
        const newBoard = structuredClone(board.value);
        for (let i = 0; i < newBoard.length; i++) {
            if (fillableCells.value[i]) newBoard[i] = -1;
        }
        board.value = newBoard;
        candidates.value = calculateCandidate();
    }
    const eraseSelected = () => {
        if (!fillableCells.value[selectedCell.value]) return;
        const newBoard = structuredClone(board.value);
        newBoard[selectedCell.value] = -1;
        board.value = newBoard;
        candidates.value = calculateCandidate();
    }
    const toggleShow = () => {
        showCandidates.value = !showCandidates.value;
    }
    // const undo = () => {
    //     let newHistory = new Array(gameHistory.value).pop();
    //     if (newHistory){
    //         const newBoard = structuredClone(board.value);
    //         newBoard[gameHistory.value[gameHistory.value.length - 1]] = -1;
    //         board.value = newBoard;
    //         gameHistory.value = newHistory;
    //         candidates.value = calculateCandidate();
    //     }
    // }
    return ( 
        <div className="flex flex-row flex-justify-around mt-4">
            <button onClick={() => eraseSelected()} className="border-none rounded aspect-square bg-transparent active:bg-blue-200">
                <div className="i-material-symbols-ink-eraser-outline-rounded text-blue-600 text-4xl"></div>
            </button>
            <button onClick={() => toggleShow()} className="border-none rounded aspect-square bg-transparent active:bg-blue-200">
                <div className="i-material-symbols-lightbulb-outline-rounded text-blue-600 text-4xl"></div>
            </button>
            <button onClick={() => clearFilled()} className="border-none rounded aspect-square bg-transparent active:bg-blue-200">
                <div className="i-material-symbols-settings-backup-restore-rounded text-blue-600 text-4xl"></div>
            </button>
            {/* <button onClick={() => undo()} className="border-none rounded aspect-square bg-transparent active:bg-blue-200">
                <div className="i-material-symbols-undo-rounded text-blue-600 text-4xl"></div>
            </button> */}
        </div>
        
     );
}
 
export default Menubar;