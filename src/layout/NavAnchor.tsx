// NavAnchor.tsx

import { NavLink, type LinkProps } from "react-router-dom";
import type { ReactNode } from "react"; 

// Define the styles that ALL links will share (Structural styles)
const BASE_STYLES = 
  "transition-colors w-full lg:w-40 py-2 sm:py-2.5 lg:py-2 text-center rounded-full";

// Define the styles for the three possible states
const INACTIVE_STYLES = "bg-[#f4f4f4] text-[#333] hover:bg-[#333] hover:text-[#f4f4f4]";
const ACTIVE_STYLES = "bg-[#333] text-[#f4f4f4] hover:opacity-80";

// NavAnchor component accepts all props that a regular NavLink does
interface NavAnchorProps extends LinkProps {
  children: ReactNode;
}

function NavAnchor({ children, className, ...props }: NavAnchorProps) {
  return (
    <NavLink 
      {...props}
      // Use the className function to conditionally apply styles
      className={({ isActive }) => 
        `${BASE_STYLES} ${isActive ? ACTIVE_STYLES : INACTIVE_STYLES} ${className || ''}`
      }
    >
      {children}
    </NavLink>
  );
}

export default NavAnchor;