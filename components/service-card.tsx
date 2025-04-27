"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { Service } from "@/types/service";
import { useRef, useState } from "react";
// Import all icons directly instead of using dynamic imports
import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Get the icon directly from Lucide icons
  const IconComponent =
    (LucideIcons as any)[service.icon] || LucideIcons.Server;

  // Handle mouse move to update spotlight position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <a href={service.url} target="_blank" rel="noopener noreferrer">
        <Card
          ref={cardRef}
          className="group relative overflow-hidden backdrop-blur-lg bg-black/80 border-white/10 transition-all duration-300 hover:bg-black/50 hover:border-white/20"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Spotlight effect - moved to a lower z-index and contained */}
          {isHovered && (
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <div
                className="absolute blur-3xl opacity-70 transition-opacity duration-300 rounded-full"
                style={{
                  background: `radial-gradient(circle at center, ${service.color}90 0%, ${service.color}30 40%, transparent 70%)`,
                  width: "200px",
                  height: "200px",
                  transform: `translate(${mousePosition.x - 100}px, ${
                    mousePosition.y - 100
                  }px)`,
                  transition: "opacity 300ms ease",
                }}
              />
            </div>
          )}

          <div className="p-6 relative z-20">
            <div className="flex items-center gap-4">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-black/70 backdrop-blur-md overflow-hidden z-10">
                {/* Circular blur effect */}
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 pulse-blur"
                  style={{
                    background: `radial-gradient(circle, ${service.color}80 0%, transparent 70%)`,
                  }}
                />

                {/* Dark glass overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>

                {/* Icon with immediate color change on hover */}
                <IconComponent
                  className="h-6 w-6 z-10"
                  style={{
                    color: isHovered ? service.color : "white",
                    filter: isHovered
                      ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))"
                      : "none",
                  }}
                />
              </div>
              <div className="relative z-20">
                <h3 className="font-medium text-lg">{service.name}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            </div>
          </div>
        </Card>
      </a>
    </motion.div>
  );
}
