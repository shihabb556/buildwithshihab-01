import React, { useEffect, useState, useRef } from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setWidth(percentage);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [percentage]);

  return (
    <div className="glass p-6 rounded-2xl border border-outline-variant/10" ref={ref}>
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold">{label}</span>
        <span className="text-primary font-bold">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary neon-glow-primary transition-all duration-1000 ease-out" 
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};
