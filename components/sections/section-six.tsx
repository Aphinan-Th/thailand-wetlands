"use client";

import { forwardRef, useContext, useRef } from "react";
import Image from "next/image";
import { SectionContext } from "@/lib/section-context";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, FishIcon, LeafIcon, TreesIcon as TreeIcon } from "lucide-react";

const SectionSix = forwardRef<HTMLElement>(function SectionSix(props, ref) {
  const { activeSection } = useContext(SectionContext);
  const isActive = activeSection === 5;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.9, 1, 1.05]);
  const birdY = useTransform(scrollYProgress, [0.3, 0.5], [50, -30]);
  const birdRotate = useTransform(scrollYProgress, [0.3, 0.5], [5, -10]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.3, 0.8], [100, 0, -50]);
  
  const stats = [
    { 
      icon: <TreeIcon className="h-10 w-10 text-primary" />,
      value: "300+",
      label: "Plant Species" 
    },
    { 
      icon: <FishIcon className="h-10 w-10 text-primary" />,
      value: "200+",
      label: "Fish Species" 
    },
    { 
      icon: <LeafIcon className="h-10 w-10 text-primary" />,
      value: "70%",
      label: "Carbon Storage" 
    },
  ];
  
  return (
    <section 
      ref={ref} 
      id="section-6"
      className="relative min-h-screen flex items-center bg-secondary/10 py-20"
    >
      <div 
        ref={containerRef}
        className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16"
      >
        <div className="w-full md:w-1/2 relative">
          <motion.div 
            className="relative aspect-square"
            style={{ scale: imageScale }}
          >
            <Image 
              src="/images/wetland-condition.png" 
              alt="Detailed view of wetland conditions with wildlife"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            
            <motion.div
              className="absolute top-0 right-[20%] w-1/4"
              style={{ 
                y: birdY,
                rotate: birdRotate,
                transformOrigin: "center center"
              }}
            >
              <Image 
                src="/images/bird-flying.png" 
                alt="Bird flying over wetlands"
                width={200}
                height={100}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="w-full md:w-1/2"
          style={{
            opacity: textOpacity,
            y: textY
          }}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">06. Ecological Health</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-2 mb-6">
            The Delicate Balance of Life
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            As we complete our journey, we return to the micro level to appreciate the delicate balance of Thailand&apos;s wetland ecosystems. These environments host an incredible diversity of life and provide essential services to both nature and people.
          </p>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-medium">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground mb-8">
            By understanding the complex relationships between all levels of these ecosystems, from individual species to national policy, we can better protect and preserve these invaluable natural resources for future generations.
          </p>
          
          <Button className="group">
            Learn how to help
            <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
});

export default SectionSix;