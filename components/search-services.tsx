"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { motion } from "framer-motion"

interface SearchServicesProps {
  onSearch: (query: string) => void
}

export function SearchServices({ onSearch }: SearchServicesProps) {
  const [query, setQuery] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="relative max-w-md mx-auto mb-8"
    >
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <Input
        type="text"
        placeholder="Search services..."
        value={query}
        onChange={handleChange}
        className="pl-10 bg-white/5 border-white/10 focus:border-white/20 transition-all"
      />
    </motion.div>
  )
}
