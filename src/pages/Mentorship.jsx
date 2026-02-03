import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSound } from '../context/SoundContext'

const Mentorship = () => {
  const { playPageTransitionSound, playHoverSound } = useSound()

  useEffect(() => {
    playPageTransitionSound()
  }, [playPageTransitionSound])

  const mentorships = [
    {
      name: 'Anwesha Das',
      role: 'UI/UX Designer, Sana Edutech',
      feedback:
        'It was an amazing session. The answers were clear, easy to understand, and very much on point. I had a great time interacting with him. With my experience, I can say that I have learned a lot and would approach him for any query hereon.',
      emoji: '👩‍🦰',
      color: 'from-gray-800 to-gray-700',
      textColor: 'text-gray-300',
    },
    {
      name: 'Mohita Sedlani',
      role: 'UI/UX Designer, Stealth Startup',
      feedback:
        'Amazing session! Akshay is caring, insightful and Patient mentor.',
      emoji: '👩',
      color: 'from-amber-100 to-yellow-50',
      textColor: 'text-gray-800',
      highlight: true,
    },
    {
      name: 'Aravind Siva',
      role: 'UI Designer',
      feedback:
        'First of all, I\'m thanking you for listening to my problems, you literally an Eye opener for me. thank you so much for your guidance.',
      emoji: '👨‍💻',
      color: 'from-gray-800 to-gray-700',
      textColor: 'text-gray-300',
    },
    {
      name: 'Swapnadeep Das',
      role: 'Product Designer',
      feedback:
        'It was a nice meeting with Akshay Vinchurkar. He helped me to clear doubts which I had in UX Design. His teaching was effective for me and I would like to schedule more meetings in the future too.',
      emoji: '👩‍🦰',
      color: 'from-gray-800 to-gray-700',
      textColor: 'text-gray-300',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Mentorship & Guidance</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Helping others grow through mentorship and knowledge sharing
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {mentorships.map((mentor, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onMouseEnter={playHoverSound}
                className={`relative bg-gradient-to-br ${mentor.color} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col ${
                  mentor.highlight ? 'lg:col-span-1 md:col-span-2 md:row-span-2' : ''
                }`}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Center owl for the highlighted card */}
                {mentor.highlight && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <span className="text-9xl">🦉</span>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Emoji Avatar */}
                  <div className="mb-4">
                    <span className="text-5xl">{mentor.emoji}</span>
                  </div>

                  {/* Name and Role */}
                  <h3 className={`text-lg font-bold ${mentor.textColor} mb-1`}>
                    {mentor.name}
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      mentor.highlight ? 'text-gray-700' : 'text-gray-400'
                    } mb-4`}
                  >
                    {mentor.role}
                  </p>

                  {/* Feedback */}
                  <p
                    className={`text-sm leading-relaxed flex-grow ${mentor.textColor} ${
                      mentor.highlight ? 'text-gray-900' : ''
                    }`}
                  >
                    "{mentor.feedback}"
                  </p>

                  {/* Star rating - optional */}
                  <div className="mt-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Central Owl Mascot Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center my-20"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block text-8xl"
          >
            🦉
          </motion.div>
          <h2 className="text-2xl font-bold text-white mt-6 mb-4">
            Open to Mentoring
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm passionate about sharing my knowledge and helping others succeed in their careers.
            Whether you're starting your journey or looking to grow your skills, I'm here to support you.
          </p>
        </motion.div>

        {/* Mentorship Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          <div className="glass-effect p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all text-center">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-white mb-3">Career Growth</h3>
            <p className="text-gray-400">
              Guidance on career development, skill building, and professional advancement
            </p>
          </div>
          <div className="glass-effect p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-3">Technical Skills</h3>
            <p className="text-gray-400">
              Learn about web development, machine learning, system design, and problem-solving
            </p>
          </div>
          <div className="glass-effect p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-white mb-3">Industry Insights</h3>
            <p className="text-gray-400">
              Insights on industry trends, best practices, and navigating the tech ecosystem
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Mentorship
