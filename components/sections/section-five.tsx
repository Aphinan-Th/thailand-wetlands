"use client";

import { forwardRef, useContext, useRef } from "react";
import Image from "next/image";
import { SectionContext } from "@/lib/section-context";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const SectionFive = forwardRef<HTMLElement>(function SectionFive(props, ref) {
  const { activeSection } = useContext(SectionContext);
  const isActive = activeSection === 4;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.9, 1, 1.05]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [0, 2]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.3, 0.8], [100, 0, -50]);
  
  const waterBodies = [
    { name: "Bueng Rachanok", area: "33 km²", type: "Freshwater Marsh" },
    { name: "Bueng Si Fai", area: "18 km²", type: "Swamp Forest" },
    { name: "Bueng Boraphet", area: "224 km²", type: "Lake" },
    { name: "Nong Han", area: "125 km²", type: "Lake" },
    { name: "Thale Noi", area: "460 km²", type: "Lake/Lagoon" },
    { name: "Sam Roi Yot", area: "72 km²", type: "Coastal Wetland" },
  ];
  
  return (
    <section 
      ref={ref} 
      id="section-5"
      className="relative min-h-screen flex items-center py-20"
    >
      <div 
        ref={containerRef}
        className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16"
      >
        <div className="w-full md:w-1/2 relative">
          <motion.div 
            className="relative aspect-square md:aspect-auto md:h-[500px]"
            style={{ 
              scale: imageScale,
              rotate: imageRotate
            }}
          >
            <Image 
              src="/images/water-bodies.png" 
              alt="Map showing six major water bodies in Thailand"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/20 dark:to-background/30"
              style={{
                rotate: useTransform(scrollYProgress, [0, 0.5], [0, -4])
              }}
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="w-full md:w-1/2"
          style={{
            opacity: textOpacity,
            y: textY
          }}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">05. The Water System</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-2 mb-6">
            Thailand&apos;s Major Water Bodies
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Thailand&apos;s wetland system includes six major water bodies that form the backbone of the country&apos;s freshwater ecology. Each has unique characteristics and plays a vital role in the larger ecosystem.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {waterBodies.map((body, index) => (
              <div 
                key={index} 
                className="bg-card p-4 rounded-lg shadow-sm border border-border"
              >
                <h3 className="font-medium mb-2">{body.name}</h3>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">{body.type}</Badge>
                  <span className="text-sm text-muted-foreground">{body.area}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default SectionFive;