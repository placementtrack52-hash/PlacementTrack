import { useProgress } from './ProgressContext'

/** @returns {{ addXP: (amount: number, source?: string) => void }} */
export const useXP = () => {
  const { addXP } = useProgress()
  return { addXP }
}
