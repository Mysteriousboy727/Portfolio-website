import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSound } from '../context/SoundContext'
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Youtube, Instagram, Check } from 'lucide-react'

const Contact = () => {
  const { playPageTransitionSound, playClickSound } = useSound()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    playPageTransitionSound()
  }, [playPageTransitionSound])

  const handleSubmit = async (e) => {
    e.preventDefault()
    playClickSound()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: 'text-red-400' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'text-pink-400' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'text-blue-300' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'text-blue-300' },
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'text-gray-100' },
    { icon: Mail, href: 'mailto:soumyaranjannayak405@gmail.com', label: 'Email', color: 'text-orange-300' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-red-400 to-orange-400 pt-24 px-4 pb-20 relative overflow-hidden">
      {/* Large text background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <motion.h2 
          className="text-9xl md:text-[200px] font-black text-white whitespace-nowrap absolute bottom-0 left-0 right-0"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        >
          DESIGN&AWE
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 right-4 md:right-8 flex flex-col gap-3 md:flex-row md:gap-4 flex-wrap md:flex-nowrap justify-end"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={playClickSound}
                className={`p-3 rounded-lg backdrop-blur-sm border border-white/20 hover:border-white/50 transition-all duration-300 ${social.color}`}
                title={social.label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto"
        >
          {/* Left Side - Large Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Let's<br />
              <span className="text-yellow-100">Get in Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Have an idea? Want to collaborate? Drop me a message and let's create something incredible together.
            </p>

            {/* Contact Info */}
            <motion.div className="space-y-4">
              {[
                { icon: Mail, text: 'soumyaranjannayak405@gmail.com' },
                { icon: MapPin, text: 'Karnataka, India' },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-white/90"
                    whileHover={{ x: 10 }}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Check className="w-8 h-8 text-red-500" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/80 text-center">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-6">Send Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/15 border border-white/30 rounded-xl text-white placeholder-white/50 focus:border-white/70 focus:outline-none transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/15 border border-white/30 rounded-xl text-white placeholder-white/50 focus:border-white/70 focus:outline-none transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-3 bg-white/15 border border-white/30 rounded-xl text-white placeholder-white/50 focus:border-white/70 focus:outline-none transition-all resize-none"
                        placeholder="Your message here..."
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-white text-red-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={playClickSound}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
