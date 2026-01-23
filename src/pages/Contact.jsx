import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useSound } from '../context/SoundContext'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const { playPageTransitionSound, playClickSound } = useSound()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    playPageTransitionSound()
  }, [playPageTransitionSound])

  const handleSubmit = (e) => {
    e.preventDefault()
    playClickSound()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    },
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
          className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400 text-center mb-16"
          variants={itemVariants}
        >
          Let's create something amazing together
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Cool Animation */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            {/* Animated Geometric Shapes */}
            <div className="relative w-full h-96 lg:h-full min-h-[500px]">
              {/* Main circle with gradient */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Rotating rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 rounded-full ${
                    i === 0 ? 'border-blue-500/30' : i === 1 ? 'border-purple-500/30' : 'border-pink-500/30'
                  }`}
                  style={{
                    width: `${(i + 1) * 100}px`,
                    height: `${(i + 1) * 100}px`,
                  }}
                  animate={{
                    rotate: i % 2 === 0 ? 360 : -360,
                  }}
                  transition={{
                    duration: 10 + i * 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}

              {/* Floating cubes */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`cube-${i}`}
                  className="absolute w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg shadow-lg"
                  style={{
                    top: `${20 + (i % 3) * 30}%`,
                    left: `${10 + (i % 4) * 25}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  }}
                />
              ))}

              {/* Center envelope icon with pulse */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="relative p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl">
                  <Mail className="w-20 h-20 text-white" />
                  
                  {/* Pulse rings */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`pulse-${i}`}
                      className="absolute inset-0 border-2 border-blue-400 rounded-2xl"
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{
                        scale: [1, 2, 2],
                        opacity: [0.5, 0, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.6,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Orbiting particles */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12
                const radius = 150
                return (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-400 rounded-full"
                    style={{
                      x: Math.cos((angle * Math.PI) / 180) * radius,
                      y: Math.sin((angle * Math.PI) / 180) * radius,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.1,
                      },
                    }}
                  />
                )
              })}
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 mt-8">
              {[
                { icon: Mail, text: 'soumyaranjannayak405@gmail.com', color: 'from-blue-500 to-cyan-500' },
                { icon: MapPin, text: 'Karnataka, India', color: 'from-orange-500 to-red-500' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-gray-600 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className={`p-3 bg-gradient-to-r ${item.color} rounded-lg`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 mt-8"
              variants={itemVariants}
            >
              {[
                { icon: Github, href: '#', color: 'hover:text-white' },
                { icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
                { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-4 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
