import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Merch from "./components/Merch";
import Footer from "./components/Footer";
import Jerseys from "./pages/Jerseys";
import Jackets from "./pages/Jackets";
import Hats from "./pages/Hats";
import FreeShipping from "./components/FreeShipping";
import Shirts from "./pages/Shirts";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Sweaters from "./pages/Sweaters";
function App() {
  return (
    <div>
      <Home />
      <FreeShipping />
      <Routes>
        <Route path="/" element={<Merch />}/>
        <Route path="/jerseys" element={<Jerseys/>}/>
        <Route path="/shirts" element={<Shirts/>}/>
        <Route path="/hats" element={<Hats/>}/>
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/jackets" element={<Jackets />} />
        <Route path="/sweaters" element={<Sweaters />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
