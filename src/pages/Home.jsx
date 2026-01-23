import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useSound } from '../context/SoundContext'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'

const Home = () => {
  const navigate = useNavigate()
  const { playPageTransitionSound, playHoverSound, playClickSound } = useSound()

  useEffect(() => {
    playPageTransitionSound()
  }, [playPageTransitionSound])

  const handleNavigate = (path) => {
    playClickSound()
    setTimeout(() => navigate(path), 200)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        type: 'spring',
        stiffness: 80,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <h2 className="text-blue-400 text-xl md:text-2xl font-semibold mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Soumya Ranjan Nayak
            </h1>
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl text-gray-300"
            variants={itemVariants}
          >
            Full Stack Developer & ML Enthusiast
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 leading-relaxed"
            variants={itemVariants}
          >
            Passionate about building innovative solutions and leveraging technology to solve real-world problems. Specialized in web development and machine learning.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => handleNavigate('/projects')}
              onMouseEnter={playHoverSound}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              onMouseEnter={playHoverSound}
              className="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <Download className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            className="flex gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/Mysteriousboy727"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/soumya-ranjan-nayak-7461552b9"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6 text-blue-400" />
            </motion.a>
            <motion.a
              href="mailto:your@email.com"
              onMouseEnter={playHoverSound}
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6 text-purple-400" />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side - Animated Profile Photo */}
        <motion.div
          className="relative flex items-center justify-center"
          variants={imageVariants}
        >
          {/* Outer rotating ring */}
          <motion.div
            className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-blue-500/30"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          {/* Middle rotating ring */}
          <motion.div
            className="absolute w-72 h-72 md:w-88 md:h-88 rounded-full border-4 border-purple-500/30"
            animate={{
              rotate: -360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          {/* Glowing background */}
          <motion.div
            className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Profile Image */}
          <motion.div
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/images/profile_pic-removebg-preview.png"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback gradient if image not found
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <div
              className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-6xl font-bold"
              style={{ display: 'none' }}
            >
              YN
            </div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
          </motion.div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-blue-400 rounded-full"
              style={{
                top: `${20 + i * 10}%`,
                left: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home
