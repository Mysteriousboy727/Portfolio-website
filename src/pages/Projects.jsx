import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSound } from '../context/SoundContext'
import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { getImagePath } from '../utils/imageUtils'

const Projects = () => {
  const { playPageTransitionSound, playHoverSound, playClickSound } = useSound()

  useEffect(() => {
    playPageTransitionSound()
  }, [playPageTransitionSound])

  const projects = [
    {
      title: 'AEGIS',
      image: 'protovision3.jpeg',
      subtitle: 'AI Fraud Prevention Engine',
      description: 'Advanced fraud prevention system using transformer models, Kafka for real-time processing, and federated learning for privacy-preserving ML. Built with cutting-edge AI technologies to detect and prevent fraudulent activities.',
      technologies: ['Python', 'TensorFlow', 'Kafka', 'Federated Learning', 'Transformers'],
      color: 'from-red-500 to-orange-500',
      github: 'https://github.com/Mysteriousboy727/AEGIS-Cyber-Defense.git',
      demo: '#',
    },
    {
      title: 'Yantraraksha Network',
      image: 'protovision2.jpeg',
      subtitle: 'AI-Powered ICS/SCADA Cybersecurity Monitoring',
      description: 'Built a full-stack cybersecurity dashboard for industrial control systems with real-time threat detection, ML-based anomaly analysis, and automated incident response.',
      technologies: ['Python', 'FastAPI', 'React', 'scikit-learn', 'Leaflet', 'WebSocket'],
      color: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/Mysteriousboy727/Yantraraksha-Network.git',
      demo: '#',
    },
  {
      title: 'High-Performance Go Web Server',
      image: 'win1.1.jpeg',
    subtitle: 'Scalable Backend System',
    description: 'Developed a high-performance web server using Go, optimized for handling concurrent requests with minimal latency. Features efficient routing and middleware support.',
    technologies: ['Go', 'Goroutines', 'HTTP/2', 'JSON'],
    color: 'from-green-500 to-emerald-500',
    github: 'https://github.com/Mysteriousboy727/gofr.git',
    demo: '#',
  },
  {
    title: 'PrognosAI – AI-Driven Predictive Maintenance',
    image: 'SIH_1_2025.jpeg',
    subtitle: 'RUL Prediction using Time-Series Data',
    description:
      'Built an AI-based predictive maintenance system to estimate Remaining Useful Life (RUL) using multivariate time-series sensor data. Implemented an LSTM model on the NASA CMAPSS dataset with an interactive dashboard for RUL trends and alerts.',
    technologies: [
      'Python',
      'TensorFlow/Keras',
      'LSTM',
      'Pandas',
      'Streamlit',
      'Docker',
    ],
    color: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/Mysteriousboy727/Prognos-ai',
    demo: '',
  },
]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing my work in software development, machine learning, and full-stack applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              onMouseEnter={playHoverSound}
              className="bg-gray-900 p-0 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all group overflow-hidden"
            >
              <div className="w-full h-40 md:h-48 overflow-hidden">
                <img
                  src={getImagePath(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{project.technologies.slice(0,3).join('  ')}</p>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.subtitle}</p>
                  </div>
                  <Sparkles className={`w-6 h-6 ml-4 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} />
                </div>

                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClickSound()}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>

                  {project.demo && project.demo !== '#' ? (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playClickSound()}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white transition-all`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </motion.a>
                  ) : (
                    <button
                      className="flex items-center px-4 py-2 rounded-lg border border-gray-700 text-gray-300 bg-transparent"
                      disabled
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Cached
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects


