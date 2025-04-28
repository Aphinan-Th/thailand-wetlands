"use client";

import { useRef } from "react";
import SectionOne from "./sections/section-one";
import SectionTwo from "./sections/section-two";
import SectionThree from "./sections/section-three";
import SectionFour from "./sections/section-four";
import SectionFive from "./sections/section-five";
import SectionSix from "./sections/section-six";
import { SectionContext } from "@/lib/section-context";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export default function ScrollytellingContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];
  
  const activeSection = useScrollSpy({
    sectionRefs,
    offset: 200
  });

  console.log(`Active Section: ${activeSection}`);
  

  return (
    <SectionContext.Provider value={{ activeSection }}>
      <div ref={containerRef} className="relative overflow-hidden">
        <SectionOne ref={sectionRefs[0]} />
        <SectionTwo ref={sectionRefs[1]} />
        <SectionThree ref={sectionRefs[2]} />
        <SectionFour ref={sectionRefs[3]} />
        <SectionFive ref={sectionRefs[4]} />
        <SectionSix ref={sectionRefs[5]} />
      </div>
    </SectionContext.Provider>
  );
}