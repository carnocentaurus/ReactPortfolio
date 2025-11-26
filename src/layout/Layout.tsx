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
          "
        style={{
          backgroundImage: 'url(/GrayWaves.png)'
        }}
      >

        {/* Global Navigation - Hidden on mobile, shows on desktop */}
        <nav className="
          hidden lg:flex
          flex-row 
          justify-center 
          items-center
          text-[#333] 
          text-base
          font-poppins 
          font-semibold
          gap-10
          pt-16
          pb-20
          px-20 xl:px-24"
        >
          <NavAnchor to="/">Home</NavAnchor>
          <NavAnchor to="/about">About</NavAnchor>
          <NavAnchor to="/projects">Projects</NavAnchor>
          <NavAnchor to="/contact">Contact</NavAnchor>
        </nav>

        <Outlet/>

        {/* Global Navigation - Shows on mobile/tablet, hidden on desktop */}
        <nav className="
          flex lg:hidden
          flex-col 
          justify-center 
          items-center
          text-[#333] 
          text-sm sm:text-2xl
          font-poppins 
          font-semibold
          gap-3 sm:gap-5
          pt-8 sm:pt-12 md:pt-16
          pb-17 sm:pb-21 md:pb-25
          px-20 sm:px-28 md:px-45"
        >
          <NavAnchor to="/">Home</NavAnchor>
          <NavAnchor to="/about">About</NavAnchor>
          <NavAnchor to="/projects">Projects</NavAnchor>
          <NavAnchor to="/contact">Contact</NavAnchor>
        </nav>
      </div>
    </>
  );
}

export default Layout;