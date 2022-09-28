import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        <Navbar />
        {/* <Home /> */}
        <About />
      </h1>
    </div>
  );
}

export default App;
