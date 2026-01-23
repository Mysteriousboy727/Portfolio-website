import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSound } from '../context/SoundContext'
import { Code, Database, Cloud, Wrench } from 'lucide-react'

const Skills = () => {
  const { playPageTransitionSound, playHoverSound } = useSound()

  useEffect(() => {
    playPageTransitionSound()
  }, [playPageTransitionSound])

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'Go', 'Kotlin'],
    },
    {
      title: 'Web Technologies',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      skills: ['React', 'Node.js', 'Express', 'FastAPI'],
    },
    {
      title: 'Machine Learning',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: ['TensorFlow', 'scikit-learn', 'Pandas', 'NumPy'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: ['MongoDB', 'MySQL'],
    },
    {
      title: 'Wrenchs & Cloud',
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500',
      skills: ['AWS', 'Docker', 'Git', 'Linux'],
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and Wrenchs I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                onMouseEnter={playHoverSound}
                className="glass-effect p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * skillIndex }}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} text-white`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 glass-effect p-8 rounded-2xl"
        >
          <div className="flex items-center mb-6">
            <Wrench className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Additional Expertise</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Problem Solving', 'System Design', 'API Development', 'DevOps', 'Data Structures', 'Algorithms', 'Full-Stack Development', 'Cloud Architecture'].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="text-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
              >
                <p className="text-gray-300 font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills


