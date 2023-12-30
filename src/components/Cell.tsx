import { candidates, fillableCells, selectedCell, showCandidates } from "../signals/gameState";
import hasConflict from '../scripts/checkConflict'
interface CellProps {
  id: number;
  num: number;
}

function Cell({ num, id }: CellProps) {
  return (
    (showCandidates.value && fillableCells.value[id] && num === -1) ? 
    <div className="flex flex-row w-full text-xs flex-wrap text-center" onClick={() => (selectedCell.value = id)}>
        {candidates.value.get(id)?.map(item => <div className="aspect-square w-[33%] h-[33%] " key={item}>{item}</div>)}
    </div> :
    <div
      className={`flex flex-content-center font-sans font-semibold  
      ${(fillableCells.value[id] && !hasConflict(id)) && "text-color-blue-800"}
      ${hasConflict(id) && "text-color-red-500"}
      `}
      onClick={() => (selectedCell.value = id)}
    >
      <span
        className={`block m-auto text-3xl 
        ${num === -1 && "opacity-0"} 
       `}
      >
        {num === -1 ? "_" : num}
      </span>
    </div>
  );
}

export default Cell;
