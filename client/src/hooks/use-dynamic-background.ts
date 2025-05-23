import { useState, useEffect, useRef, useCallback } from 'react';

interface ColorShift {
  baseColor: string;
  hoverColor: string;
  activeColor: string;
}

export default function useDynamicBackground() {
  const [currentColor, setCurrentColor] = useState<string>('');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Color configurations for different sections
  const colorSchemes: Record<string, ColorShift> = {
    hero: {
      baseColor: 'var(--light-background)',
      hoverColor: 'var(--light-background-alt)',
      activeColor: 'var(--light-background-accent)',
    },
    solution: {
      baseColor: 'var(--light-secondary-bg)',
      hoverColor: 'var(--light-secondary-bg-alt)',
      activeColor: 'var(--light-secondary-bg-accent)',
    },
    testimonials: {
      baseColor: 'var(--dark-background)',
      hoverColor: 'var(--dark-background-alt)',
      activeColor: 'var(--dark-background-accent)',
    },
  };

  const transitionTo = useCallback((color: string, duration: number = 400) => {
    setIsTransitioning(true);
    setCurrentColor(color);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, duration);
  }, []);

  const handleMouseEnter = useCallback((sectionId: string) => {
    const colorScheme = colorSchemes[sectionId];
    if (colorScheme) {
      transitionTo(colorScheme.hoverColor);
    }
  }, [colorSchemes, transitionTo]);

  const handleMouseLeave = useCallback((sectionId: string) => {
    const colorScheme = colorSchemes[sectionId];
    if (colorScheme) {
      transitionTo(colorScheme.baseColor);
    }
  }, [colorSchemes, transitionTo]);

  const handleInteraction = useCallback((sectionId: string) => {
    const colorScheme = colorSchemes[sectionId];
    if (colorScheme) {
      transitionTo(colorScheme.activeColor);
      
      // Reset to base color after a delay
      setTimeout(() => {
        transitionTo(colorScheme.baseColor, 600);
      }, 500);
    }
  }, [colorSchemes, transitionTo]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    currentColor,
    isTransitioning,
    handleMouseEnter,
    handleMouseLeave,
    handleInteraction,
  };
}