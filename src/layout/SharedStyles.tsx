// SharedStyles.tsx

import { NavLink, type LinkProps } from "react-router-dom";
import type { ReactNode, LabelHTMLAttributes, HTMLAttributes } from "react";

// ============= NAV ANCHOR COMPONENT =============
const BASE_STYLES = 
  "transition-colors w-full py-2 sm:py-2.5 lg:py-1 text-center rounded-full" as const;

const INACTIVE_STYLES = "bg-[#f4f4f4] text-[#333] hover:bg-[#666] hover:text-[#f4f4f4]" as const;
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
"text-[#666] font-poppins text-sm sm:text-2xl lg:text-sm" as const;

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
"text-[#333] font-poppins font-semibold text-lg sm:text-3xl lg:text-lg mb-5 sm:mb-8 lg:mb-4" as const;

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

// ============= PROJECT ANCHOR COMPONENT =============

const PROJECT_ANCHOR_STYLES = `
  font-poppins text-[#f4f4f4]
  text-lg sm:text-3xl lg:text-base
  w-60 sm:w-100 lg:w-70
  py-2 sm:py-4 lg:py-2
  text-center bg-[#333] rounded-full
  hover:bg-[#a3a3a3] hover:text-[#333]
`.trim();

interface ProjectAnchorProps extends LinkProps {
  children: ReactNode;
}

export function ProjectAnchor({ children, className, ...props }: ProjectAnchorProps) {
  return (
    <NavLink 
      {...props}
      className={`${PROJECT_ANCHOR_STYLES} ${className || ''}`}
    >
      {children}
    </NavLink>
  );
}

// ============= INPUT ELEMENT COMPONENT =============

const INPUT_ELEMENT_STYLES = `
  font-poppins 
  border-2 sm:border-3 lg:border-2
  border-[#333]
  text-[#333]
  text-base sm:text-3xl lg:text-base
  w-45 sm:w-90 lg:w-60
  py-1 sm:py-3 lg:py-1
  px-2 sm:px-4 lg:px-3
  placeholder:text-base sm:placeholder:text-3xl lg:placeholder:text-base
`.trim();

interface InputElementProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Remove children from props since input can't have children
}

export function InputElement({ className, ...props }: InputElementProps) {
  return (
    <input
      {...props}
      className={`${INPUT_ELEMENT_STYLES} ${className || ''}`}
    />
  );
}

// ============= CALCULATOR BUTTONS COMPONENT =============

const CALCULATOR_BTN_STYLES = `
  font-poppins 
  text-[#f4f4f4]
  text-center
  text-2xl sm:text-4xl lg:text-2xl
  mx-auto
  pt-2 sm:pt-4 lg:pt-2
  w-12 sm:w-18 lg:w-12
  h-12 sm:h-18 lg:h-12
  rounded-full
  shadow-sm sm:shadow-md lg:shadow-sm
  shadow-[#333]
  hover:opacity-70
`.trim();

interface CalculatorBtnProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function CalculatorBtn({ children, className, ...props }: CalculatorBtnProps) {
  return (
    <p 
      {...props}
      className={`${CALCULATOR_BTN_STYLES} ${className || ''}`}
    >
      {children}
    </p>
  );
}