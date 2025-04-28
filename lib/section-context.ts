"use client";

import { createContext } from "react";

interface SectionContextType {
  activeSection: number;
}

export const SectionContext = createContext<SectionContextType>({
  activeSection: 0
});