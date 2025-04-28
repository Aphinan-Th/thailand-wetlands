"use client";

import { forwardRef, useContext, useRef } from "react";
import Image from "next/image";
import { SectionContext } from "@/lib/section-context";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlobeIcon, MapPinIcon } from "lucide-react";

const SectionThree = forwardRef<HTMLElement>(function SectionThree(props, ref) {
  const { activeSection } = useContext(SectionContext);
  const isActive = activeSection === 2;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const mapScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.8, 1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.3, 0.7], [100, 0, -50]);
  
  // Animation for map pins appearing
  const pin1Opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const pin2Opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const pin3Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const pin4Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  
  const pins = [
    { top: "30%", left: "40%", opacity: pin1Opacity, label: "Bueng Boraphet" },
    { top: "20%", left: "65%", opacity: pin2Opacity, label: "Bueng Si Fai" },
    { top: "10%", left: "25%", opacity: pin3Opacity, label: "Nong Han" },
    { top: "20%", left: "50%", opacity: pin4Opacity, label: "Thale Noi" },
  ];
  
  return (
    <section 
      ref={ref} 
      id="section-3"
      className="relative min-h-screen flex items-center py-20"
    >
      <div 
        ref={containerRef}
        className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16"
      >
        <div className="w-full md:w-1/2 relative">
          <motion.div 
            className="relative aspect-square md:aspect-[3/4] mx-auto"
            style={{ scale: mapScale }}
          >
            <Image 
              src="/images/thailand-map.webp" 
              alt="Map of Thailand showing wetland locations"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            
            {pins.map((pin, index) => (
              <motion.div 
                key={index}
                className="absolute group"
                style={{ 
                  top: pin.top, 
                  left: pin.left,
                  opacity: pin.opacity 
                }}
              >
                <div className="relative">
                  <MapPinIcon className="h-6 w-6 text-primary drop-shadow-md" />
                  <div className="absolute w-3 h-3 bg-primary rounded-full -translate-x-[5px] -translate-y-[30px] animate-ping" />
                  
                  <div className="absolute left-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card shadow-md rounded-md px-3 py-1 text-sm">
                    {pin.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="w-full md:w-1/2"
          style={{
            opacity: textOpacity,
            y: textY
          }}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">03. The Geographic Context</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-2 mb-6">
            Thailand&apos;s Wetland Geography
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Zooming out further reveals the national scale of Thailand&apos;s wetland systems. These vital ecosystems are distributed throughout the country, each with unique characteristics and ecological importance.
          </p>
          
          <div className="flex items-center gap-3 mb-6">
            <GlobeIcon className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-medium">National Significance</h3>
              <p className="text-muted-foreground text-sm">
                Thailand&apos;s wetlands cover approximately 36,000 square kilometers
              </p>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            From the northern regions to the southern peninsula, these wetlands serve as critical water management systems, carbon sinks, and biodiversity hotspots that support both wildlife and human communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
});

export default SectionThree;