import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </h1>
    </div>
  );
}

export default App;
