import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSound } from '../context/SoundContext'
import { GraduationCap, Award, Target } from 'lucide-react'

const About = () => {
  const { playPageTransitionSound } = useSound()

  useEffect(() => {
    playPageTransitionSound()
  }, [playPageTransitionSound])

  const education = [
    {
      degree: 'B.E. Computer Science',
      institution: 'Cambridge Institute of Technology North Campus',
      period: '2023–2027',
      cgpa: 'CGPA: 8.2',
    },
    {
      degree: '12th Grade',
      institution: 'High School',
      period: '2022',
      cgpa: '82%',
    },
    {
      degree: '11th Grade',
      institution: 'High School',
      period: '2021',
      cgpa: '84%',
    },
    {
      degree: '10th Grade',
      institution: 'High School',
      period: '2020',
      cgpa: '92%',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
            <span className="text-gradient">About Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Who I Am</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a Computer Science undergraduate and software engineering intern candidate 
              with a strong passion for building innovative solutions. My expertise spans across 
              data structures, algorithms, backend development, machine learning, cloud computing, 
              and full-stack development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and solving complex problems with 
              elegant solutions. My focus is always on reliability, engineering quality, and 
              continuous learning.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">What I Do</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                <span>Develop scalable backend systems using Node.js, Express, and FastAPI</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                <span>Build machine learning models for real-world applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                <span>Create full-stack web applications with React and modern frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                <span>Deploy and manage cloud infrastructure on AWS</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                <span>Mentor and lead technical communities</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center mb-8">
            <GraduationCap className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="glass-effect p-6 rounded-xl hover:border-blue-500/50 border border-gray-700/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-gray-300 font-medium">{edu.period}</p>
                    <p className="text-blue-400 font-semibold">{edu.cgpa}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About


