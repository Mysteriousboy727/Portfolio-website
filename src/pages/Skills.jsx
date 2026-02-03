import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSound } from '../context/SoundContext'
import { getImagePath } from '../utils/imageUtils'

const Skills = () => {
  const { playPageTransitionSound, playHoverSound } = useSound()

  useEffect(() => {
    playPageTransitionSound()
  }, [playPageTransitionSound])

  const techStack = [
    { name: 'JavaScript', icon: '📘', color: 'from-yellow-400 to-yellow-500', textColor: 'text-gray-900' },
    { name: 'TypeScript', icon: '📗', color: 'from-blue-500 to-blue-600', textColor: 'text-white' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-400', textColor: 'text-gray-900' },
    { name: 'Notion', icon: '🔤', color: 'from-gray-700 to-gray-800', textColor: 'text-white' },
    { name: 'Next.js', icon: '▶️', color: 'from-cyan-400 to-cyan-500', textColor: 'text-gray-900' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-600', textColor: 'text-white' },
    { name: 'Express', icon: '⚙️', color: 'from-teal-500 to-teal-600', textColor: 'text-white' },
    { name: 'Python', icon: '🐍', color: 'from-orange-500 to-orange-600', textColor: 'text-white' },
    { name: 'MongoDB', icon: '🍃', color: 'from-red-500 to-red-600', textColor: 'text-white' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-blue-800', textColor: 'text-white' },
    { name: 'Docker', icon: '🐳', color: 'from-cyan-500 to-cyan-600', textColor: 'text-white' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-600 to-orange-700', textColor: 'text-white' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: 'spring',
        stiffness: 120,
      },
    },
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Tech Stack</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to build amazing products
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side - Tech Icons Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 grid grid-cols-3 md:grid-cols-4 gap-6"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  transition: { duration: 0.3 },
                }}
                onMouseEnter={playHoverSound}
                className={`group relative bg-gradient-to-br ${tech.color} rounded-3xl aspect-square flex items-center justify-center cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Tech icon and label */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span className="text-4xl mb-2">{tech.icon}</span>
                  <span className={`text-xs font-bold text-center hidden sm:block ${tech.textColor}`}>
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Info or Mascot placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                Full-Stack Development
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <span>Frontend: React, Next.js, TypeScript</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <span>Backend: Node.js, Express, Python</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <span>Databases: MongoDB, PostgreSQL</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <span>DevOps: Docker, AWS, Cloud Architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <span>Problem Solving & System Design</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-effect p-6 rounded-2xl border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
            <p className="text-gray-400">C++, Java, Python, JavaScript, Go, Kotlin</p>
          </div>
          <div className="glass-effect p-6 rounded-2xl border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-4">Web</h3>
            <p className="text-gray-400">React, Node.js, Express, FastAPI, Next.js</p>
          </div>
          <div className="glass-effect p-6 rounded-2xl border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-4">ML & Data</h3>
            <p className="text-gray-400">TensorFlow, scikit-learn, Pandas, NumPy</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills


