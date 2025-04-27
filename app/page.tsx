import { ServiceGrid } from "@/components/service-grid"
import { DashboardHeader } from "@/components/dashboard-header"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-3xl opacity-30 animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-emerald-500/5 rounded-full blur-3xl opacity-20 animate-[spin_25s_linear_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <DashboardHeader />
        <main className="mt-12">
          <ServiceGrid />
        </main>
      </div>
    </div>
  )
}
