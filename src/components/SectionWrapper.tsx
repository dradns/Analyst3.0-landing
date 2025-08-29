import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'glass' | 'gradient-primary' | 'gradient-secondary' | 'muted';
  withIntersectionAnimation?: boolean;
}

const SectionWrapper = ({ 
  children, 
  className = '', 
  background = 'default',
  withIntersectionAnimation = true 
}: SectionWrapperProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!withIntersectionAnimation) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [withIntersectionAnimation]);

  const getBackgroundStyles = () => {
    switch (background) {
      case 'glass':
        return 'bg-glass/20 backdrop-blur-sm';
      case 'gradient-primary':
        return 'bg-gradient-primary/5';
      case 'gradient-secondary':
        return 'bg-gradient-secondary/5';
      case 'muted':
        return 'bg-muted/30';
      default:
        return 'bg-background';
    }
  };

  return (
    <div 
      ref={sectionRef}
      className={`
        relative w-full
        ${getBackgroundStyles()}
        ${withIntersectionAnimation 
          ? `transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }` 
          : ''
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;