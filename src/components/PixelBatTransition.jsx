import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const PixelBatTransition = () => {
  const [isFlying, setIsFlying] = useState(false)
  const location = useLocation()

  useEffect(() => {
    console.log('Page changed! Bat should fly now')
    setIsFlying(true)
    const timer = setTimeout(() => {
      setIsFlying(false)
      console.log('Bat animation ended')
    }, 3000)
    return () => clearTimeout(timer)
  }, [location.pathname])

  console.log('Bat is flying:', isFlying)

  return (
    <AnimatePresence mode="wait">
      {isFlying && (
        <motion.div
          key="bat-animation"
          className="fixed top-0 left-0 w-full h-full z-[99999] pointer-events-none"
          style={{ 
            background: 'transparent',
            overflow: 'visible'
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Bat Container */}
          <motion.div
            className="absolute"
            initial={{ 
              left: '-250px',
              top: '40%',
            }}
            animate={{ 
              left: ['0%', '50%', '120%'],
              top: ['40%', '35%', '30%'],
            }}
            transition={{ 
              duration: 2.5,
              ease: 'linear'
            }}
            style={{
              width: '250px',
              height: '250px',
              display: 'block'
            }}
          >
            {/* Simple CSS Bat Shape */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              filter: 'drop-shadow(0 0 50px rgba(220, 38, 38, 1)) drop-shadow(0 0 100px rgba(220, 38, 38, 0.8))'
            }}>
              {/* Bat Image using CSS */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '180px',
                height: '180px',
                background: '#000000',
                clipPath: 'polygon(50% 30%, 45% 35%, 40% 35%, 35% 40%, 30% 40%, 25% 45%, 20% 50%, 15% 55%, 10% 60%, 5% 65%, 5% 70%, 10% 70%, 15% 65%, 20% 60%, 25% 58%, 30% 58%, 35% 60%, 40% 65%, 42% 70%, 45% 73%, 47% 75%, 48% 78%, 48% 82%, 50% 85%, 52% 82%, 52% 78%, 53% 75%, 55% 73%, 58% 70%, 60% 65%, 65% 60%, 70% 58%, 75% 58%, 80% 60%, 85% 65%, 90% 70%, 95% 70%, 95% 65%, 90% 60%, 85% 55%, 80% 50%, 75% 45%, 70% 40%, 65% 40%, 60% 35%, 55% 35%)',
                boxShadow: '0 0 80px rgba(220, 38, 38, 0.9), inset 0 0 30px rgba(220, 38, 38, 0.5)'
              }}>
                {/* Red Eyes */}
                <div style={{
                  position: 'absolute',
                  top: '45%',
                  left: '35%',
                  width: '15px',
                  height: '15px',
                  background: '#dc2626',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px #dc2626'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '45%',
                  right: '35%',
                  width: '15px',
                  height: '15px',
                  background: '#dc2626',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px #dc2626'
                }} />
              </div>

              {/* Animated glow pulse */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.9, 0.6]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '250px',
                  height: '250px',
                  background: 'radial-gradient(circle, rgba(220, 38, 38, 0.6) 0%, rgba(139, 0, 0, 0.3) 50%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(40px)',
                  zIndex: -1
                }}
              />
            </div>
          </motion.div>

          {/* Screen flash effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(139, 0, 0, 0.3), rgba(0, 0, 0, 0.1))',
              pointerEvents: 'none'
            }}
          />

          {/* Trail effect */}
          <motion.div
            className="absolute"
            initial={{ 
              left: '-100px',
              top: '40%',
            }}
            animate={{ 
              left: ['10%', '60%', '110%'],
              top: ['40%', '35%', '30%'],
            }}
            transition={{ 
              duration: 2.5,
              ease: 'linear'
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  scaleX: [0, 1, 0]
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: 'easeOut'
                }}
                style={{
                  position: 'absolute',
                  left: `${-20 * (i + 1)}px`,
                  top: `${i * 3}px`,
                  width: '40px',
                  height: '3px',
                  background: i % 2 === 0 ? 'rgba(220, 38, 38, 0.6)' : 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '2px',
                  transformOrigin: 'right center'
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PixelBatTransition
