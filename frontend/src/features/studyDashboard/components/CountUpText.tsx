import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { memo, useEffect } from 'react'

interface CountUpTextProps {
  value: number
  suffix?: string
  decimals?: number
  className?: string
}

const CountUpText = memo(
  ({ value, suffix = '', decimals = 0, className = '' }: CountUpTextProps) => {
    const motionValue = useMotionValue(0)
    const display = useTransform(motionValue, (current) => `${current.toFixed(decimals)}${suffix}`)

    useEffect(() => {
      const controls = animate(motionValue, value, {
        duration: 1,
        ease: 'easeOut',
      })
      return () => controls.stop()
    }, [motionValue, value])

    return <motion.span className={className}>{display}</motion.span>
  },
)

CountUpText.displayName = 'CountUpText'

export default CountUpText
