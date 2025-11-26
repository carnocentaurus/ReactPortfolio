// SharedStyles.tsx

import { NavLink, type LinkProps } from "react-router-dom";
import type { ReactNode, LabelHTMLAttributes, HTMLAttributes } from "react";

// ============= NAV ANCHOR COMPONENT =============
const BASE_STYLES = 
  "transition-colors w-20 sm:w-30 lg:w-40 py-2 sm:py-2.5 lg:py-1 text-center rounded-full";

const INACTIVE_STYLES = "bg-[#f4f4f4] text-[#333] hover:bg-[#333] hover:text-[#f4f4f4]";
const ACTIVE_STYLES = "bg-[#333] text-[#f4f4f4] hover:opacity-80";

interface NavAnchorProps extends LinkProps {
  children: ReactNode;
}

export default function NavAnchor({ children, className, ...props }: NavAnchorProps) {
  return (
    <NavLink 
      {...props}
      className={({ isActive }) => 
        `${BASE_STYLES} ${isActive ? ACTIVE_STYLES : INACTIVE_STYLES} ${className || ''}`
      }
    >
      {children}
    </NavLink>
  );
}

// ============= LABEL COMPONENT =============
const ABOUT_LABEL_STYLES = "text-[#f4f4f4] font-poppins font-semibold mb-2 text-sm sm:text-base";

interface AboutLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export function AboutLabel({ children, className, ...props }: AboutLabelProps) {
  return (
    <label 
      {...props}
      className={`${ABOUT_LABEL_STYLES} ${className || ''}`}
    >
      {children}
    </label>
  );
}

// ============= TEXT COMPONENT =============
const ABOUT_TEXT_STYLES = "text-[#f4f4f4] font-poppins text-sm sm:text-base";

interface AboutTextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function AboutText({ children, className, ...props }: AboutTextProps) {
  return (
    <p 
      {...props}
      className={`${ABOUT_TEXT_STYLES} ${className || ''}`}
    >
      {children}
    </p>
  );
}