import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderColors?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  borderColors = 'border-outline-variant/10 hover:border-primary/40'
}) => {
  const hoverStyles = hoverEffect ? `transition-all duration-500 ${borderColors}` : '';
  
  return (
    <div className={`glass rounded-3xl border ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
