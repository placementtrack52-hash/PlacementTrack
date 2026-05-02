import { memo } from 'react'
import { joinClasses } from '../utils'

interface LoadingSkeletonProps {
  className?: string
}

const LoadingSkeleton = memo(({ className }: LoadingSkeletonProps) => (
  <div
    aria-hidden="true"
    className={joinClasses('animate-pulse rounded-xl bg-white/8', className)}
  />
))

LoadingSkeleton.displayName = 'LoadingSkeleton'

export default LoadingSkeleton
