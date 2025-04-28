"use client";

import { forwardRef, useContext, useRef } from "react";
import Image from "next/image";
import { SectionContext } from "@/lib/section-context";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const SectionOne = forwardRef<HTMLElement>(function SectionOne(props, ref) {
	const { activeSection } = useContext(SectionContext);
	const isActive = activeSection === 0;

	const contentRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(contentRef, { once: false, margin: "-100px" });

	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const fishY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
	const birdY = useTransform(scrollYProgress, [0, 0], [0, -200]);
	const birdRotate = useTransform(scrollYProgress, [0, 0.5], [0, -15]);
	const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 1]);
	const textY = useTransform(scrollYProgress, [0, 0.2, 0.8], [100, 0, -100]);

	return (
		<section ref={ref} id="section-1" className="relative min-h-screen flex items-center py-20">
			<div
				ref={containerRef}
				className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16"
			>
				<div className="w-full md:w-1/2 relative aspect-square md:aspect-auto">
					<div className="relative w-full h-full">
						<motion.div className="absolute inset-0" style={{ y: fishY }}>
							<Image
								src="/images/fish-scene.png"
								alt="Fish swimming in a wetland with ripples in the water"
								width={800}
								height={800}
								className="w-full h-auto"
								priority
							/>
						</motion.div>

						<motion.div
							className="absolute top-0 left-0 right-0"
							style={{
								y: birdY,
								rotate: birdRotate,
								transformOrigin: "center center",
							}}
						>
							<Image
								src="/images/bird-flying.png"
								alt="Bird flying above the water"
								width={300}
								height={150}
								className="w-1/2 h-auto mx-auto"
							/>
						</motion.div>
					</div>
				</div>

				<motion.div
					ref={contentRef}
					className="w-full md:w-1/2"
					style={{
						opacity: textOpacity,
						y: textY,
					}}
				>
					<span className="text-primary text-sm font-medium uppercase tracking-wider">
						01. The Micro Perspective
					</span>
					<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-2 mb-6">Life Begins in the Waters</h2>
					<p className="text-muted-foreground text-lg mb-6">
						In Thailand&apos;s wetlands, the intricate dance of life plays out beneath the surface and in
						the air above. Fish swim through clear waters while birds swoop down, creating a perfect harmony
						of predator and prey.
					</p>
					<p className="text-muted-foreground">
						These delicate ecosystems serve as the foundation for Thailand&apos;s biodiversity, supporting
						countless species and maintaining the natural balance that sustains all life in the region.
					</p>
				</motion.div>
			</div>
		</section>
	);
});

export default SectionOne;
