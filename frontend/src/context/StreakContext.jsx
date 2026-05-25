import { useProgress } from './ProgressContext'

/** @returns {{ markActivity: (subjectId: string, activityType: string) => void }} */
export const useStreak = () => {
  const { markActivity } = useProgress()
  return { markActivity }
}
