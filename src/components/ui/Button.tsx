"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = Omit<HTMLMotionProps<"button">, "ref"> & {
  variant?: ButtonVariant;
  href?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-orange-primary text-white hover:bg-[#d14f12] shadow-md shadow-orange-primary/20",
  secondary:
    "bg-white text-navy border border-navy/10 hover:border-navy/20 hover:bg-white/80",
  outline:
    "bg-transparent text-navy border-2 border-navy/20 hover:border-orange-primary hover:text-orange-primary",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", className = "", children, href, ...props },
    ref
  ) {
    const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-primary disabled:opacity-50 ${variantStyles[variant]} ${className}`;

    if (href) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        type="button"
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
