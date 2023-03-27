import Footer from "./Footer";
import FreeShipping from "./FreeShipping";
import Header from "./Header";
import Merch from "./Merch";
import MerchBanner from "./MerchBanner";
import Signup from "./Signup";

function Home() {
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

export default Home;
