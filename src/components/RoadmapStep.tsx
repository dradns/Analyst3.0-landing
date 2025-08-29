import React from 'react';

interface RoadmapStepProps {
  stepNumber: number;
  title: string;
  isActive?: boolean;
  position?: 'left' | 'right' | 'center';
  showConnector?: boolean;
}

const RoadmapStep = ({ 
  stepNumber, 
  title, 
  isActive = false, 
  position = 'center',
  showConnector = true 
}: RoadmapStepProps) => {
  return (
    <div className="relative flex items-center justify-center py-8">
      {/* Соединительная линия */}
      {showConnector && (
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      )}
      
      {/* Контейнер шага */}
      <div className={`
        relative flex items-center gap-4 z-10
        ${position === 'left' ? 'mr-auto' : position === 'right' ? 'ml-auto' : 'mx-auto'}
      `}>
        {/* Номер шага */}
        <div className={`
          relative flex items-center justify-center w-12 h-12 rounded-full
          border-2 backdrop-blur-sm font-semibold text-sm
          transition-all duration-500
          ${isActive 
            ? 'bg-primary border-primary text-primary-foreground shadow-glow animate-pulse' 
            : 'bg-glass/30 border-primary/30 text-primary hover:border-primary/50'
          }
        `}>
          {stepNumber}
          
          {/* Glow эффект для активного шага */}
          {isActive && (
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          )}
        </div>
        
        {/* Заголовок шага */}
        <div className={`
          px-4 py-2 rounded-lg backdrop-blur-sm border
          transition-all duration-300
          ${isActive 
            ? 'bg-primary/10 border-primary/20 text-primary' 
            : 'bg-glass/20 border-glass-border/30 text-muted-foreground hover:text-foreground'
          }
        `}>
          <span className="font-medium text-sm whitespace-nowrap">
            {title}
          </span>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute left-1/4 top-1/2 w-1 h-1 bg-primary/20 rounded-full animate-pulse delay-300" />
      <div className="absolute right-1/4 top-1/2 w-1 h-1 bg-secondary/20 rounded-full animate-pulse delay-700" />
    </div>
  );
};

export default RoadmapStep;