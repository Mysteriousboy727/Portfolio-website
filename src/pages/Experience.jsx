import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSound } from '../context/SoundContext'
import { Briefcase, Users, TrendingUp, Code } from 'lucide-react'

const Experience = () => {
  const { playPageTransitionSound } = useSound()

  useEffect(() => {
    playPageTransitionSound()
  }, [playPageTransitionSound])

  const experiences = [
    {
      title: 'Organizer',
      company: 'GDG on Campus',
      period: '2025 - Present',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      achievements: [
        'Led a community of 20+ active members',
        'Organized technical workshops and events for 500+ students',
        'Facilitated knowledge sharing and community growth',
      ],
    },

    {
      title: 'Machine Learning Engineer Intern',
      company: 'Infosys Springboard',
      period: '2025',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        'Built LSTM model on NASA CMAPSS dataset achieving 92% accuracy',
        'Developed Dockerized Streamlit dashboard for model visualization',
        'Mentored junior developers and conducted technical workshops',
      ],
    },
    {
      title: 'Backend Developer',
      company: 'GDG on Campus',
      period: '2024',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Built Node.js + MongoDB backend for event management platform',
        'Improved API performance by 40% through optimization techniques',
        'Reduced bugs by 60% through comprehensive testing and code reviews',
      ],
    },
  ]

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-32 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass-effect p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-blue-400 font-semibold">{exp.company}</p>
                        </div>
                        <span className="text-gray-400 text-sm font-medium">{exp.period}</span>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-gray-300">
                            <span className="text-blue-400 mr-2 mt-1">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Experience


