import Footer from "./components/Footer";
import FreeShipping from "./components/FreeShipping";
import Header from "./components/Header";
import Merch from "./components/Merch";
import MerchBanner from "./components/MerchBanner";
import Signup from "./components/Signup";
function App() {
  return (
    <div>
      <Signup />
      <Header />
      <MerchBanner />
      <FreeShipping />
      <Merch />
      <Footer />
    </div>
  );
}

export default App;
