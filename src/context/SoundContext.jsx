import { createContext, useContext, useState } from 'react'

const SoundContext = createContext()

export const useSound = () => {
  const context = useContext(SoundContext)
  if (!context) {
    throw new Error('useSound must be used within SoundProvider')
  }
  return context
}

export const SoundProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(true)

  const playSound = (frequency = 440, duration = 100, type = 'sine') => {
    if (!soundEnabled) return

    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = frequency
      oscillator.type = type

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + duration / 1000)
    } catch (error) {
      console.log('Audio context not supported')
    }
  }

  const playClickSound = () => {
    playSound(600, 50, 'sine')
  }

  const playHoverSound = () => {
    playSound(500, 30, 'sine')
  }

  const playPageTransitionSound = () => {
    playSound(400, 150, 'sine')
  }

  return (
    <SoundContext.Provider value={{ playClickSound, playHoverSound, playPageTransitionSound, soundEnabled, setSoundEnabled }}>
      {children}
    </SoundContext.Provider>
  )
}


