import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// Pages
import Home from "./home/Home";
import About from "./home/About";
import Projects from "./home/Projects";
import Contact from "./home/Contact";

// Individual Projects
import Pokedex from "./projects/Pokedex/Pokedex";

function App() {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />

        {/* Sub-routes under projects */}
        <Route path="projects/pokedex" element={<Pokedex />} />
      </Route>
    </Routes>
  );
}

export default App;