// Layout.tsx

import {Outlet} from "react-router-dom";
import NavAnchor from "./SharedStyles";

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
          flex
          flex-col
          items-center
          pt-10 sm:pt-20"
        style={{
          backgroundImage: 'url(/GrayWaves.png)'
        }}
      >

        {/* Global Navigation - Hidden on mobile, shows on desktop */}
        <nav className="
          flex
          text-[#333] 
          bg-[#f4f4f4]
          rounded-full
          text-base sm:text-2xl lg:text-lg
          font-poppins 
          font-semibold
          gap-1 sm:gap-2
          py-1 sm:py-2
          px-1 sm:px-2"
        >
          <NavAnchor to="/">Home</NavAnchor>
          <NavAnchor to="/about">About</NavAnchor>
          <NavAnchor to="/projects">Projects</NavAnchor>
          <NavAnchor to="/contact">Contact</NavAnchor>
        </nav>

        <Outlet/>
      </div>
    </>
  );
}

export default Layout;