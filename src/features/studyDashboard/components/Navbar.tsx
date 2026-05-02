import { BarChart3, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { memo } from 'react'
import { useAuth } from '../../../context/AuthContext'

interface NavbarProps {
  onOpenProgress: () => void
}

const Navbar = memo(({ onOpenProgress }: NavbarProps) => {
  const { user } = useAuth()

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[rgba(10,14,26,0.72)] backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#4361ee] shadow-[0_10px_30px_rgba(67,97,238,0.45)]">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Prep Master</p>
            <p className="text-xs text-slate-400">{user?.name ? `${user.name}'s tracking desk` : 'Study analytics'}</p>
          </div>
        </div>

        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpenProgress}
          aria-label="Open progress analytics"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#4361ee] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(67,97,238,0.35)] transition duration-300 hover:shadow-[0_20px_42px_rgba(124,58,237,0.4)]"
        >
          <BarChart3 className="h-4 w-4" />
          Progress
        </motion.button>
      </div>
    </header>
  )
})

Navbar.displayName = 'Navbar'

export default Navbar
