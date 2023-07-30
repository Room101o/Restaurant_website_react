import Navs from "./compenets/Navs/Navs.js";
import Home from "./compenets/Home/Home.js";
import About from "./compenets/About/About.js";
import Explore from "./compenets/Explore/Explore.js";
import Panier from "./compenets/Navs/Panier.js";
const App = () =>{
  return(
    <>
    <Navs />
    <Home />
    <About/>
    <Explore/>  
    <Panier/>
    </>
  );
}
export default App;