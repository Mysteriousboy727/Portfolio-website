import { motion } from 'framer-motion'
import { useSound } from '../context/SoundContext'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const { playClickSound, playHoverSound } = useSound()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Mysteriousboy727',
      icon: Github,
      color: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/soumya-ranjan-nayak-7461552b9',
      icon: Linkedin,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      url: 'mailto:soumyaranjannayak405@gmail.com',
      icon: Mail,
      color: 'hover:text-red-400',
    },
  ]

  return (
    <footer className="relative mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Soumya Ranjan Nayak</h3>
            <p className="text-gray-400 text-sm">
              Computer Science undergraduate and software engineering intern. 
              Passionate about building innovative solutions with cutting-edge technology.
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Location</h3>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Bangalore, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    onMouseEnter={playHoverSound}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-500 transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Soumya Ranjan Nayak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


