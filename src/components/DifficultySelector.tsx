import { difficulty, selectedCell } from "../signals/gameState";
import { showBoardChangeWarning } from "../signals/uiState";
import {useSignals} from '@preact/signals-react/runtime';

export default function DifficultySelector() {

  useSignals();

  const changeDifficulty = (diff: number) => {
    showBoardChangeWarning.value = true;
    difficulty.value = diff;
    selectedCell.value = -1;
  }

  return (
    <div className="flex w-full flex-justify-between">
      <button onClick={() => {changeDifficulty(40)}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-l w-full">
        Easy
      </button>
      <button onClick={() => {changeDifficulty(50)}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 w-full">
        Medium
      </button>
      <button onClick={() => {changeDifficulty(60)}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-r w-full">
        Hard
      </button>
    </div>
  );
}
