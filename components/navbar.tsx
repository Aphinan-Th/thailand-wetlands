"use client";

import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { DropletIcon } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
        scrolled 
          ? "bg-background/80 backdrop-blur-md py-3 shadow-sm" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DropletIcon size={24} className="text-primary" />
          <span className="font-serif text-xl">Thailand&apos;s Wetlands</span>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {/* <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#ecosystem" className="text-sm hover:text-primary transition-colors">Ecosystem</a>
            <a href="#masterplan" className="text-sm hover:text-primary transition-colors">Master Plan</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a> */}
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}