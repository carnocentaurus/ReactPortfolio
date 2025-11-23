// Layout.tsx

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

      <div 
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url(/DesktopLake.png)'
        }}
      >
        <Outlet />
      </div>
    </>
  );
}

export default Layout;