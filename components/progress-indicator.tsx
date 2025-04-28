"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export default function ProgressIndicator() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>(Array.from({ length: 6 }).map(() => null));
  
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.map((_, index) =>
      document.getElementById(`section-${index + 1}`) as HTMLElement
    );
  }, []);
  
  const activeSection = useScrollSpy({
    sectionRefs: sectionRefs.current.map((ref) => ({ current: ref })),
    offset: 200
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > window.innerHeight);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col gap-4 items-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const section = document.getElementById(`section-${index + 1}`);
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 relative",
              activeSection === index 
                ? "bg-primary scale-125"
                : "bg-muted hover:bg-primary/50"
            )}
            aria-label={`Navigate to section ${index + 1}`}
          >
            {activeSection === index && (
              <span className="absolute -left-2 -top-2 w-7 h-7 rounded-full border border-primary animate-ping" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}