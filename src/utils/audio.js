const playTone = (frequency, duration, type = 'sine') => {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext
  if (!AudioContextClass) return

  const context = new AudioContextClass()
  const oscillator = context.createOscillator()
  const gain = context.createGain()

  oscillator.type = type
  oscillator.frequency.value = frequency
  oscillator.connect(gain)
  gain.connect(context.destination)
  gain.gain.value = 0.05
  oscillator.start()

  setTimeout(() => {
    oscillator.stop()
    context.close()
  }, duration)
}

export const playCorrectSound = () => playTone(640, 180, 'triangle')
export const playWrongSound = () => playTone(220, 220, 'sawtooth')
