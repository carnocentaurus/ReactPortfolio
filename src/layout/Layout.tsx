// Layout.tsx

import {Outlet} from "react-router-dom";
import NavAnchor from "./NavAnchor";

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
        <nav className="
          flex justify-center 
          text-[#333] 
          text-base
          font-poppins 
          font-semibold
          gap-10
          pt-20"
        >
          <NavAnchor to="/">Home</NavAnchor>
          <NavAnchor to="/about">About</NavAnchor>
          <NavAnchor to="/projects">Projects</NavAnchor>
          <NavAnchor to="/contact">Contact</NavAnchor>
        </nav>

        <Outlet />
      </div>
    </>
  );
}


export default Layout;