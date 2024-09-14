import Navbar from "./Components/Navbar"; 
import Collection from "./Components/Collection";
import BestSellers from "./Components/BestSellers";
import Subscribe from "./Components/Subscribe";

function App() {
  return (
    <div>
      <Navbar />
      <Collection />
      <BestSellers/>
      <Subscribe/>
    </div>
  );
}

export default App;
