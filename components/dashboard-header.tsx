"use client";

import { motion } from "framer-motion";
import { ServerIcon } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="flex flex-col items-center justify-center py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/30 blur-xl rounded-full"></div>
          <ServerIcon className="h-8 w-8 relative z-10" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Homelab Dash</h1>
      </motion.div>
    </header>
  );
}
