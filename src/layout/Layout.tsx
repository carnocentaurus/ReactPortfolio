// Layout.tsx

import {Outlet} from "react-router-dom";
import NavAnchor from "./SharedStyles";
import {type FC} from "react";

const Layout: FC = () => {
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
          pt-10 sm:pt-20 lg:pt-10
        "
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
          text-sm sm:text-2xl lg:text-sm
          font-poppins 
          w-80 sm:w-120 lg:w-100
        "
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