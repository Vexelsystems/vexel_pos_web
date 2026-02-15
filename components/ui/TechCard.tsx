"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface TechCardProps {
  name: string;
  iconName: string;
  explanation: string;
  index: number;
}

/**
 * TECH CARD COMPONENT
 * 
 * Displays a technology item with an icon, name, and a simple explanation.
 * Features a premium glassmorphic design and hover animations.
 */
export function TechCard({ name, iconName, explanation, index }: TechCardProps) {
  // Resolve icon component from lucide-react
  const Icon = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -5 }}
      className="group relative h-full"
    >
      {/* Background Glow */}
      <div className="absolute -inset-2 bg-linear-to-r from-primary/10 to-purple-500/10 rounded-4xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative h-full bg-white dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-4xl p-8 shadow-2xl shadow-black/5 flex flex-col items-center text-center transition-all duration-500 group-hover:border-primary/20">
        <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon size={32} />
        </div>
        
        <h4 className="text-xl font-bold mb-3 text-foreground tracking-tight">{name}</h4>
        <p className="text-sm text-foreground/60 leading-relaxed">
          {explanation}
        </p>
      </div>
    </motion.div>
  );
}
