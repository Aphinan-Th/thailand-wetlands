"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, DropletIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple fade-in animation for hero elements
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];
    
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.add("translate-y-0", "opacity-100");
        }, 300 + (index * 200));
      }
    });
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-background dark:via-black/30 z-10"
        aria-hidden="true"
      />
      
      <div 
        className="absolute inset-0 bg-[url('/images/wetland-bg.jpg')] bg-cover bg-center opacity-30 dark:opacity-20"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 text-center relative z-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <DropletIcon size={40} className="text-primary absolute animate-pulse" />
              <div className="absolute w-full h-full border border-primary/20 rounded-full animate-ping" />
            </div>
          </div>
          
          <h1 
            ref={titleRef}
            className={cn(
              "font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight",
              "opacity-0 -translate-y-8 transition-all duration-1000 ease-out"
            )}
          >
            Thailand&apos;s Wetlands: A Journey from <span className="text-primary">Micro to Macro</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className={cn(
              "text-lg md:text-xl text-muted-foreground max-w-2xl",
              "opacity-0 -translate-y-8 transition-all duration-1000 ease-out delay-200"
            )}
          >
            Discover the delicate balance of Thailand&apos;s wetland ecosystems through an immersive visual experience, from the smallest creatures to the national conservation efforts.
          </p>
          
          <div 
            ref={ctaRef}
            className={cn(
              "mt-4",
              "opacity-0 -translate-y-8 transition-all duration-1000 ease-out delay-400"
            )}
          >
            <Button 
              size="lg" 
              onClick={scrollToContent}
              className="rounded-full group"
            >
              Begin Journey
              <ArrowDownIcon size={16} className="ml-2 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-20">
        <ArrowDownIcon size={24} onClick={scrollToContent} className="cursor-pointer" />
      </div>
    </section>
  );
}