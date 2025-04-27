"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ServiceCard } from "@/components/service-card"
import { SearchServices } from "@/components/search-services"
import { services } from "@/data/services"

export function ServiceGrid() {
  const [filteredServices, setFilteredServices] = useState(services)

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredServices(services)
      return
    }

    const filtered = services.filter(
      (service) =>
        service.name.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase()),
    )

    setFilteredServices(filtered)
  }

  return (
    <>
      <SearchServices onSearch={handleSearch} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-400">No services found</p>
          </div>
        )}
      </motion.div>
    </>
  )
}
