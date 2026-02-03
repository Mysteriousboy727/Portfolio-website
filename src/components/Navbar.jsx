import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useSound } from '../context/SoundContext'
import { Menu, X, Shield } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { playClickSound, playHoverSound } = useSound()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 pt-4 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <motion.div
            className="flex items-center gap-2 bg-gray-700/40 backdrop-blur-md rounded-full px-6 py-3 border border-gray-600/50 shadow-lg"
            whileHover={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)' }}
          >
            {/* Shield Icon */}
            <Shield className="w-5 h-5 text-white flex-shrink-0" />

            {/* Navigation Items */}
            <div className="flex items-center gap-1">
              {navItems.map((item, index) => (
                <div key={item.path} className="flex items-center">
                  <Link
                    to={item.path}
                    onClick={playClickSound}
                    onMouseEnter={playHoverSound}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-blue-500/20 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                  {index < navItems.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-center">
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen)
              playClickSound()
            }}
            className="text-gray-300 hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 px-4"
          >
            <div className="bg-gray-700/40 backdrop-blur-md rounded-2xl p-4 border border-gray-600/50 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    playClickSound()
                  }}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-300 hover:bg-gray-700/50 hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar


