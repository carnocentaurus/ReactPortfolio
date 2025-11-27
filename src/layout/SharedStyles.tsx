// SharedStyles.tsx

import { NavLink, type LinkProps } from "react-router-dom";
import type { ReactNode, LabelHTMLAttributes, HTMLAttributes } from "react";

// ============= NAV ANCHOR COMPONENT =============
const BASE_STYLES = 
  "transition-colors w-20 sm:w-30 lg:w-40 py-2 sm:py-2.5 lg:py-1 text-center rounded-full" as const;

const INACTIVE_STYLES = "bg-[#f4f4f4] text-[#333] hover:bg-[#333] hover:text-[#f4f4f4]" as const;
const ACTIVE_STYLES = "bg-[#333] text-[#f4f4f4] hover:opacity-80" as const;

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
const ABOUT_LABEL_STYLES = 
"text-[#666] font-poppins text-sm sm:text-lg lg:text-sm" as const;

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
const ABOUT_TEXT_STYLES = 
"text-[#333] font-poppins font-righteous text-lg sm:text-2xl lg:text-base mb-5" as const;

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