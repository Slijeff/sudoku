import DifficultySelector from "./components/DifficultySelector"
import Grid from "./components/Grid"
import Menubar from "./components/Menubar"
import Modal from "./components/Modal"
import NumberPad from "./components/Numberpad"

function App() {
  return (
    <div className="max-w-sm mx-auto font-sans">
      <h1 className="my-2">Sudoku</h1>
      <Grid/>
      <DifficultySelector/>
      <NumberPad/>
      <Menubar/>
      <Modal text="This will reset the board, are you sure?" title="Warning" confirmText="confirm"/>
    </div>
  )
}

export default App
