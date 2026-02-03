import { motion } from 'framer-motion'
import { getImagePath } from '../utils/imageUtils'

const AvatarSticker = ({ position = 'absolute', className = '' }) => {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      className={`${position} ${className}`}
      variants={floatingVariants}
      animate="animate"
    >
      <img
        src={getImagePath('Bitmoji.jpeg')}
        alt="Avatar Sticker"
        className="w-full h-full object-cover rounded-lg drop-shadow-lg"
      />
    </motion.div>
  )
}

export default AvatarSticker
