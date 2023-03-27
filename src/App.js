import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Jerseys from "./components/Jerseys";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/jerseys" element={<Jerseys/>}/>
      </Routes>
    </div>
  );
}

export default App;
