import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Merch from "./components/Merch";
import Footer from "./components/Footer";
import Jerseys from "./pages/Jerseys";
function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/" element={<Merch />}/>
        <Route path="/jerseys" element={<Jerseys/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
