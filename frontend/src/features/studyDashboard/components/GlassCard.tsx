import { memo, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { joinClasses } from '../utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

const GlassCard = memo(({ children, className }: GlassCardProps) => (
  <motion.section
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ duration: 0.24, ease: 'easeOut' }}
    className={joinClasses(
      'dashboard-card relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(26,31,53,0.78)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:p-6',
      className,
    )}
  >
    <div className="pointer-events-none absolute inset-x-10 top-0 h-20 rounded-full bg-[#4361ee]/15 blur-3xl" />
    <div className="relative z-10">{children}</div>
  </motion.section>
))

GlassCard.displayName = 'GlassCard'

export default GlassCard
