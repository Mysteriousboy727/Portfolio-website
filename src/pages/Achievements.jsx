import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSound } from '../context/SoundContext'
import { Award, Trophy, Star, Zap, X } from 'lucide-react'
import { getImagePath } from '../utils/imageUtils'

const Achievements = () => {
  const { playPageTransitionSound, playClickSound } = useSound()
  const [selectedAchievement, setSelectedAchievement] = useState(null)

  useEffect(() => {
    playPageTransitionSound()
  }, [playPageTransitionSound])

  const achievements = [
  {
    title: 'Finalist – Smart India Hackathon 2025 National Grand Finale',
    description: 'Top 1,360 teams nationwide',
    image: getImagePath('SIH_1_2025.jpeg'),
    icon: Trophy,
    color: 'from-red-500 to-orange-500',
    date: '2025',
    details:
      'Demonstrated strong problem-solving, growth mindset, creativity, and teamwork while competing among 1,360 finalist teams selected from 72,000+ teams and 826,000+ students across 2,587 institutes, showcasing software engineering expertise in computer science, data structures, algorithms, and management.',
    gallery: [
      getImagePath('SIH_1_2025.jpeg'),
      getImagePath('SIH_2_2025.jpeg'),
      getImagePath('SIH_3_2025.jpeg'),
    ],
  },
  {
    title: 'Winner – Smart India Hackathon 2024 (College Level)',
    description: 'Led winning project "Smart Skills Evaluator"',
    image: getImagePath('SIH_1_2024.jpeg'),
    icon: Award,
    color: 'from-emerald-500 to-teal-500',
    date: '2024',
    details:
      'Applied strong software engineering principles, provided technical guidance, and demonstrated leadership, accountability, time management, and creative problem-solving while leading the winning team through collaborative efforts.',
    gallery: [
      getImagePath('SIH_1_2024.jpeg'),
      getImagePath('SIH_2_2024.jpeg'),
      getImagePath('SIH_3_2024.jpeg'),
    ],
  },
  {
  title: 'Organizer – Google Developer Group on Campus (GDGoC), CIT Bangalore',
  description: 'Led 20+ member tech community impacting 500+ students',
  image: getImagePath('gdgoc1.jpeg'),
  icon: Zap,
  color: 'from-blue-500 to-indigo-500',
  date: '2025–Present',
  details:
    'Providing technical guidance and leadership to a 20+ member core team, organizing workshops and hackathons for 500+ students. Increased community participation by 60% through creative engagement strategies. Coordinated 15+ technical sessions on computer science, data structures, algorithms, and software engineering principles with industry experts while demonstrating strong collaboration, accountability, and time management.',
  gallery: [
    getImagePath('gdgoc1.jpeg'),
    getImagePath('gdgoc2.jpeg'),
    getImagePath('gdgoc3.jpeg'),
  ],
},
  {
    title: 'Finalist (Top 10) – ProtoVision Ignite 2024',
    description: 'Built ML-powered Android app',
    image: getImagePath('protovision2024.jpeg'),
    icon: Star,
    color: 'from-purple-500 to-pink-500',
    date: '2024',
    details:
      'Solved complex problems by developing an ML-powered Android application using strong foundations in data structures, algorithms, and core computer science principles, while demonstrating effective collaboration and team management.',
    gallery: [
      getImagePath('protovision2024.jpeg'),
      getImagePath('protovision2.jpeg'),
      getImagePath('protovision3.jpeg'),
    ],
  },
  
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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

  const handleAchievementClick = (achievement) => {
    playClickSound()
    setSelectedAchievement(achievement)
  }

  const closeModal = () => {
    playClickSound()
    setSelectedAchievement(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Achievements
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400 text-center mb-4"
          variants={itemVariants}
        >
          Milestones and recognitions in my journey
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -10 }}
                className="group relative cursor-pointer"
                onClick={() => handleAchievementClick(achievement)}
              >
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Image Container with Cool Animation */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    {/* Fallback gradient */}
                    <div
                      className={`w-full h-full bg-gradient-to-br ${achievement.color} items-center justify-center`}
                      style={{ display: 'none' }}
                    >
                      <Icon className="w-24 h-24 text-white" />
                    </div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                    {/* Click hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                      <div className="text-white text-lg font-semibold px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                        Click to view
                      </div>
                    </div>

                    {/* Floating icon */}
                    <motion.div
                      className={`absolute top-4 right-4 p-3 bg-gradient-to-r ${achievement.color} rounded-full shadow-lg`}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Date badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-sm text-white font-semibold">
                      {achievement.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Sparkle effect */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Modal for Achievement Details */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-gray-900 border-2 border-gray-700 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotate: 10, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Header with Icon */}
              <div className={`p-8 bg-gradient-to-br ${selectedAchievement.color} relative overflow-hidden`}>
                <motion.div
                  className="absolute top-0 right-0 opacity-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <selectedAchievement.icon className="w-64 h-64" />
                </motion.div>
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative z-10"
                >
                  <h2 className="text-4xl font-bold text-white mb-2">{selectedAchievement.title}</h2>
                  <p className="text-xl text-white/90">{selectedAchievement.description}</p>
                  <span className="inline-block mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
                    {selectedAchievement.date}
                  </span>
                </motion.div>
              </div>

              {/* Details */}
              <div className="p-8">
                <motion.p
                  className="text-gray-300 text-lg mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedAchievement.details}
                </motion.p>

                {/* Photo Gallery with Animations */}
                <h3 className="text-2xl font-bold text-white mb-6">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedAchievement.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      className="relative aspect-square rounded-xl overflow-hidden group"
                      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1, type: 'spring' }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                      <img
                        src={img}
                        alt={`${selectedAchievement.title} - ${idx + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      {/* Fallback */}
                      <div
                        className={`w-full h-full bg-gradient-to-br ${selectedAchievement.color} items-center justify-center`}
                        style={{ display: 'none' }}
                      >
                        <selectedAchievement.icon className="w-20 h-20 text-white" />
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-semibold">Photo {idx + 1}</span>
                      </div>

                      {/* Animated border */}
                      <motion.div
                        className={`absolute inset-0 border-4 border-transparent group-hover:border-gradient rounded-xl`}
                        animate={{
                          borderColor: ['rgba(59, 130, 246, 0)', 'rgba(59, 130, 246, 0.5)', 'rgba(59, 130, 246, 0)'],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating particles in modal */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${selectedAchievement.color}`}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Achievements

