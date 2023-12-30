import Cell from "./Cell";
import { board, selectedCell } from "../signals/gameState";
import { useSignals } from "@preact/signals-react/runtime";
import isInterfered from "../scripts/checkInterference";

function Grid() {
  useSignals();

  return (
    <div className="grid grid-cols-9 gap-0 border-black border-solid border-1 mb-4">
      {board.value.map((item, idx) => (
        <div
          className={`
          w-full
          h-full
          aspect-square 
          flex 
          justify-center 
          border-gray
          border-solid
          border-1 
          [&:nth-child(3n)]:border-r-2 border-r-black
          [&:nth-child(n+19):nth-child(-n+27)]:border-b-3 border-b-black
          [&:nth-child(n+46):nth-child(-n+54)]:border-b-3 border-b-black
          ${
            (selectedCell.value === idx || (item !== -1 && board.value[selectedCell.value] === item)) &&
            "bg-blue-300 transition-colors duration-200"
          }
          ${
            isInterfered(selectedCell.value, idx) &&
            "bg-blue-100 transition-colors duration-200"
          }
          `}
          key={idx}
        >
          <Cell id={idx} num={item}/>
        </div>
      ))}
    </div>
  );
}

export default Grid;
