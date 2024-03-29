import About from "./components/About";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div>
      <Background/>
      <Navbar />
      
      <Home />
      
      <Skills />
      <Work />
      <About />
      <Contact />
      
    </div>
  );
}

export default App;
