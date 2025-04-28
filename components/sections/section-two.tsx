"use client";

import { forwardRef, useContext, useRef } from "react";
import Image from "next/image";
import { SectionContext } from "@/lib/section-context";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionTwo = forwardRef<HTMLElement>(function SectionTwo(props, ref) {
  const { activeSection } = useContext(SectionContext);
  const isActive = activeSection === 1;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.8, 1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.3, 0.8], [100, 0, -50]);
  
  return (
    <section 
      ref={ref} 
      id="section-2"
      className="relative min-h-screen flex items-center bg-secondary/10 py-20"
    >
      <div 
        ref={containerRef}
        className="container mx-auto px-4 flex flex-col items-center"
      >
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          style={{
            opacity: textOpacity,
            y: textY
          }}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">02. Widening the Lens</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-2 mb-6">
            The Wetland Expanse
          </h2>
          <p className="text-muted-foreground text-lg">
            As we pull back, the true scale of Thailand&apos;s wetlands comes into view. These vast expanses of water and vegetation form a complex network of habitats that extend for kilometers across the landscape.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative w-full max-w-4xl aspect-[16/9] mx-auto"
          style={{ scale }}
        >
          <Image 
            src="/images/wetland-wide.png" 
            alt="Wide view of Thailand&apos;s wetland ecosystem"
            fill
            className="object-cover rounded-lg shadow-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
          
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent rounded-b-lg" />
          
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-lg font-medium">
              Home to thousands of plant and animal species
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default SectionTwo;