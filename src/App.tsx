// App.tsx

import { Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./home/Home.tsx";
import About from "./home/About.tsx";
import Projects from "./home/Projects.tsx";
import Contact from "./home/Contact.tsx";

// Projects
import Pokedex from "./projects/Pokedex/Pokedex.tsx";


function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />


        {/* Individual Routes */}
        <Route path="/projects/pokedex" element={<Pokedex />} />
      </Routes>
    </>
  );
}

export default App;