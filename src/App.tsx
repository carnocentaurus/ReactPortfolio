// App.tsx

import { Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Projects
import Pokedex from "./projects/Pokedex/Pokedex";


function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />


        {/* Individual Routes */}
        <Route path="/projects/pokedex" element={<Pokedex />} />
      </Routes>
    </>
  );
}

export default App;