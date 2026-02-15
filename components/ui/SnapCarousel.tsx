/**
 * SNAP CAROUSEL
 * Horizontal scroll carousel with snap points and dot indicators
 * Calculates active item based on which child is closest to viewport center
 */

"use client";

import React, { useRef, useState, useEffect } from "react";

interface SnapCarouselProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  className?: string;
  itemClassName?: string;
}

export function SnapCarousel({ children, className = "", scrollContainerClassName = "" }: { children: React.ReactNode, className?: string, scrollContainerClassName?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = React.Children.toArray(children);

  // Calculates which child is closest to viewport center on scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const containerCenter = scrollLeft + width / 2;
      
      let closestIndex = 0;
      let minDistance = Number.MAX_VALUE;
      
      // Find child whose center is closest to viewport center
      Array.from(scrollRef.current.children).forEach((child, i) => {
        const childEl = child as HTMLElement;
        const childCenter = childEl.offsetLeft + childEl.offsetWidth / 2;
        const distance = Math.abs(childCenter - containerCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      });
      
      setActiveIndex(closestIndex);
    }
  };

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {/* snap-x snap-mandatory enables CSS scroll snapping */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className={`flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 gap-4 ${scrollContainerClassName}`}
      >
        {children}
      </div>

      {/* Dot indicators - only on mobile */}
      <div className="flex justify-center gap-2 md:hidden">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (scrollRef.current) {
                const child = scrollRef.current.children[idx] as HTMLElement;
                // Subtract 24px for padding offset
                scrollRef.current.scrollTo({ left: child.offsetLeft - 24, behavior: "smooth" });
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'w-6 bg-primary opacity-100' : 'w-2 bg-gray-200 opacity-50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
