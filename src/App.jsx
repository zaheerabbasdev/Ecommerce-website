import Navbar from "./Components/Navbar"; 
import Collection from "./Components/Collection";
import BestSellers from "./Components/BestSellers";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Collection />
      <BestSellers/>
      <Footer/>
    </div>
  );
}

export default App;
