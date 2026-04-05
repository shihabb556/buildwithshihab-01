import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'glass' | 'ghost';
  neon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  neon = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-4 rounded-xl font-bold text-lg transition-transform transition-colors duration-300";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-on-primary hover:scale-105",
    glass: "glass border border-outline-variant/20 hover:bg-white/5",
    ghost: "bg-primary text-on-primary px-6 py-2 rounded-xl hover:scale-95 active:scale-90"
  };

  const neonStyle = neon ? "neon-glow-primary" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${neonStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
