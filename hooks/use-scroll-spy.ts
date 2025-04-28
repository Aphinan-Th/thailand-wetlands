"use client";

import { useEffect, useState } from "react";

interface UseScrollSpyProps {
  sectionRefs: React.RefObject<HTMLElement>[];
  offset?: number;
}

export function useScrollSpy({ sectionRefs, offset = 0 }: UseScrollSpyProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentSectionIndex = sectionRefs.findIndex((ref, index) => {
        if (!ref.current) return false;
        
        const element = ref.current;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;
        
        // Check if the section is currently in view
        return scrollPosition >= elementTop && scrollPosition < elementBottom;
      });

      if (currentSectionIndex !== -1) {
        setActiveSection(currentSectionIndex);
      }
    };

    // Add passive event listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs, offset]);

  return activeSection;
}