// Layout.tsx

import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div 
        className="
          w-full 
          min-h-screen 
          bg-cover 
          bg-center 
          bg-no-repeat 
          bg-fixed
          "
        style={{
          backgroundImage: 'url(/GrayWaves.png)'
        }}
      >

        {/* Global Navigation */}
        <nav className="flex justify-center text-[#333] font-poppins">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Outlet />
      </div>
    </>
  );
}

export default Layout;