import { Link } from 'react-router-dom'
import { Sparkles, Mail, MapPin, Phone, BookOpen, Brain, Target, Award, MessageCircle, Video, ExternalLink, Globe, Star } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/subjects', label: 'Subjects' },
    { to: '/practice-feedback', label: 'Practice' },
    { to: '/badges', label: 'Badges' },
    { to: '/daily-routine', label: 'Daily Routine' },
    { to: '/notes', label: 'Notes' },
  ]

  const learningAreas = [
    { name: 'Aptitude', icon: Brain, color: 'text-amber-400' },
    { name: 'Reasoning', icon: Brain, color: 'text-sky-400' },
    { name: 'Verbal', icon: BookOpen, color: 'text-emerald-400' },
    { name: 'Technical', icon: Target, color: 'text-violet-400' },
    { name: 'Company Prep', icon: Award, color: 'text-rose-400' },
  ]

  const socialLinks = [
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/91XXXXXXXXXX' },
    { icon: Globe, label: 'Website', href: 'https://placementtrack52@gmail.com' },
    { icon: Video, label: 'YouTube', href: 'https://youtube.com/@PlacementTrack' },
    { icon: Star, label: 'Reviews', href: 'https://PlacementTrack.app/reviews' },
  ]

  return (
    <footer className="relative mt-8 w-full overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0f1729] to-[#111827] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400">
                <Sparkles className="h-5 w-5 text-ink" />
              </div>
              <span className="font-display text-xl font-bold">PlacementTrack</span>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Your complete placement preparation companion. Master aptitude, reasoning, verbal skills, and ace your dream company's interview.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-sky-500/50 hover:bg-sky-500/20 hover:text-sky-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-sky-300">
              <Brain className="h-4 w-4" />
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-300 transition hover:text-white hover:underline decoration-sky-400 underline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Areas */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-sky-300">
              <BookOpen className="h-4 w-4" />
              Learning Areas
            </h3>
            <ul className="mt-4 space-y-3">
              {learningAreas.map((area) => (
                <li key={area.name} className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ${area.color}`}>
                    <area.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-slate-200">{area.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-sky-300">
              <Mail className="h-4 w-4" />
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-sky-400" />
                <div>
                  <p className="text-xs text-slate-400">Email</p>
                  <a href="mailto:placementtrack52@gmail.com" className="text-sm text-slate-200 hover:text-white">
                    placementtrack52@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-emerald-400" />
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm text-slate-200">Bangalore, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-amber-400" />
                <div>
                  <p className="text-xs text-slate-400">Support</p>
                  <a href="tel:+91XXXXXXXXXX" className="text-sm text-slate-200 hover:text-white">
                    +91 XXXXXXXXXX
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 md:flex-row">
          <p className="text-xs text-slate-400">
            © {currentYear} PlacementTrack. All rights reserved.
          </p>
          <div className="flex gap-3 text-xs text-slate-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer