import './App.css';
import Homepage from './HomePage/homepage';
import { Routes, Route} from "react-router-dom";
import Board from './Board/board';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
