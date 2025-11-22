import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      {/* Global Navigation */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* All pages render here */}
      <Outlet />
    </>
  );
}

export default Layout;