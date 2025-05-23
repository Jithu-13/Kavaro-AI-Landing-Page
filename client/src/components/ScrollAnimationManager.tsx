import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimationManager() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Initialize animations for different sections
    initializeHeroAnimations();
    initializeProblemSectionAnimations();
    initializeSolutionSectionAnimations();
    
    return () => {
      // Clean up all ScrollTrigger instances when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const initializeHeroAnimations = () => {
    // Hero section title animation
    gsap.fromTo(
      '.hero-title',
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        ease: 'power2.out'
      }
    );
    
    // Hero section subtitle animation with slight delay
    gsap.fromTo(
      '.hero-subtitle',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        delay: 0.3,
        ease: 'power2.out'
      }
    );
    
    // Hero CTA buttons animation
    gsap.fromTo(
      '.hero-cta',
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
      }
    );
  };

  const initializeProblemSectionAnimations = () => {
    // Problem section header animation
    gsap.fromTo(
      '#problem h2',
      { opacity: 0, y: 30 },
      { 
        scrollTrigger: {
          trigger: '#problem',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: 'power1.out'
      }
    );
    
    // Problem section paragraphs
    gsap.fromTo(
      '#problem p',
      { opacity: 0, y: 20 },
      { 
        scrollTrigger: {
          trigger: '#problem',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        delay: 0.2,
        ease: 'power1.out'
      }
    );
    
    // Problem nodes animation - staggered appearance
    gsap.fromTo(
      '.rounded-full.bg-white',
      { scale: 0, opacity: 0 },
      { 
        scrollTrigger: {
          trigger: '#problem .relative.max-w-7xl',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        scale: 1, 
        opacity: 1, 
        duration: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      }
    );
  };

  const initializeSolutionSectionAnimations = () => {
    // Solution section title animation
    gsap.fromTo(
      '#solution h2',
      { opacity: 0, y: 30 },
      { 
        scrollTrigger: {
          trigger: '#solution',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: 'power1.out'
      }
    );
    
    // Solution section central hub appears with scale
    gsap.fromTo(
      '#solution .absolute.rounded-full',
      { scale: 0.5, opacity: 0 },
      { 
        scrollTrigger: {
          trigger: '#solution',
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        },
        scale: 1, 
        opacity: 1, 
        duration: 1,
        ease: 'elastic.out(1, 0.7)'
      }
    );
    
    // Comparison cards animate in with stagger
    gsap.fromTo(
      '#solution .rounded-3xl',
      { y: 50, opacity: 0 },
      { 
        scrollTrigger: {
          trigger: '#solution .grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 0, 
        opacity: 1, 
        duration: 0.5,
        stagger: 0.1,
        ease: 'power1.out'
      }
    );
  };

  // Component doesn't render anything visible
  return null;
}