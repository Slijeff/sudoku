import { FunctionComponent } from "react";
import { board, candidates, fillableCells, selectedCell } from "../signals/gameState";
import { useSignals } from "@preact/signals-react/runtime";
import calculateCandidate from "../scripts/calculateCandidate";

interface NumberPadProps {}

const NumberPad: FunctionComponent<NumberPadProps> = () => {
  useSignals();
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const setNumber = (num: number) => {
    if (!fillableCells.value[selectedCell.value]) return;
    let newArr = structuredClone(board.value);
    newArr[selectedCell.value] = num;
    board.value = newArr; 
    candidates.value = calculateCandidate();
    // let newHistory = structuredClone(gameHistory.value);
    // newHistory.push(selectedCell.value);
    // gameHistory.value = newHistory;
  }
  return (
    <div className="flex flex-row w-full flex-justify-between mt-4">
      {numbers.map((item) => (
        <button
          className=" text-3xl bg-transparent active:bg-blue-100 text-blue-600 font-semibold border-none border-blue-500 rounded px-3"
          key={item}
          onClick={() => setNumber(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default NumberPad;
