import React from 'react';

interface SectionTransitionProps {
  variant?: 'default' | 'hero-to-cards' | 'cards-to-learning' | 'learning-to-features' | 'features-to-cta' | 'cta-to-why' | 'why-to-final';
  className?: string;
}

const SectionTransition = ({ variant = 'default', className = '' }: SectionTransitionProps) => {
  const getTransitionStyles = () => {
    switch (variant) {
      case 'hero-to-cards':
        return 'bg-gradient-to-b from-transparent via-primary/5 to-secondary/10 h-32';
      case 'cards-to-learning':
        return 'bg-gradient-to-b from-secondary/10 via-muted/20 to-primary/5 h-24';
      case 'learning-to-features':
        return 'bg-gradient-to-b from-primary/5 via-glass/30 to-transparent h-28';
      case 'features-to-cta':
        return 'bg-gradient-to-b from-transparent via-secondary/5 to-primary/10 h-32';
      case 'cta-to-why':
        return 'bg-gradient-to-b from-primary/10 via-muted/10 to-secondary/5 h-24';
      case 'why-to-final':
        return 'bg-gradient-to-b from-secondary/5 via-primary/10 to-transparent h-32';
      default:
        return 'bg-gradient-to-b from-transparent via-muted/10 to-transparent h-20';
    }
  };

  const getDecorativeElements = () => {
    switch (variant) {
      case 'hero-to-cards':
        return (
          <>
          </>
        );
      case 'features-to-cta':
        return (
          <>
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            
          </>
        );
      case 'cta-to-why':
        return (
          <>
            <div className="absolute left-1/5 top-1/2 w-32 h-px bg-gradient-to-r from-secondary/20 to-transparent rotate-12" />
            <div className="absolute right-1/5 top-1/3 w-24 h-px bg-gradient-to-l from-primary/20 to-transparent -rotate-12" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`relative w-full overflow-hidden ${getTransitionStyles()} ${className}`}>
      {/* Основной градиентный фон */}
      <div className="absolute inset-0 opacity-60" />
      
      {/* Декоративные элементы */}
      {getDecorativeElements()}
      
      {/* Тонкие волнистые линии для создания плавности */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path
            d="M0,60 Q300,20 600,60 T1200,60 V120 H0 Z"
            className="fill-current text-primary/10"
          />
        </svg>
      </div>
      
      {/* Дополнительная волна для глубины */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-15" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path
            d="M0,80 Q400,40 800,80 T1200,80 V120 H0 Z"
            className="fill-current text-secondary/10"
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionTransition;