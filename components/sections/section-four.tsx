"use client";

import { forwardRef, useContext, useRef } from "react";
import Image from "next/image";
import { SectionContext } from "@/lib/section-context";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";

const SectionFour = forwardRef<HTMLElement>(function SectionFour(props, ref) {
  const { activeSection } = useContext(SectionContext);
  const isActive = activeSection === 3;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.9, 1, 1.05]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.3, 0.8], [100, 0, -50]);
  
  const challenges = [
    "Water pollution from agriculture and industry",
    "Urban expansion and infrastructure development",
    "Climate change impacts including drought and flooding",
    "Overexploitation of natural resources"
  ];
  
  const solutions = [
    "Integrated water resource management",
    "Sustainable land use planning and zoning",
    "Community-based conservation initiatives",
    "Ecological restoration programs"
  ];
  
  return (
    <section 
      ref={ref} 
      id="section-4"
      className="relative min-h-screen flex items-center bg-secondary/10 py-20"
    >
      <div 
        ref={containerRef}
        className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16"
      >
        <div className="w-full md:w-1/2 relative">
          <motion.div 
            className="relative aspect-square md:aspect-[4/3]"
            style={{ scale: imageScale }}
          >
            <Image 
              src="/images/master-plan.png" 
              alt="National Master Plan for water management"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
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
          <span className="text-primary text-sm font-medium uppercase tracking-wider">04. The National Strategy</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-2 mb-6">
            Thailand&apos;s National Master Plan
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            To protect these vital ecosystems, Thailand has developed a comprehensive National Master Plan that addresses the challenges facing wetland conservation and management.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <XCircleIcon className="h-5 w-5 text-destructive mr-2" />
                Current Challenges
              </h3>
              <ul className="space-y-2">
                {challenges.map((challenge, index) => (
                  <li key={index} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-primary mr-2" />
                Strategic Solutions
              </h3>
              <ul className="space-y-2">
                {solutions.map((solution, index) => (
                  <li key={index} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default SectionFour;