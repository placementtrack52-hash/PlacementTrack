import { useState, useEffect } from 'react'
import { getMondayOfWeek } from '../utils/plannerUtils'
import StreakTracker from './StreakTracker'
import StudyGoalCard from './StudyGoalCard'
import PomodoroTimer from './PomodoroTimer'
import TaskList from './TaskList'
import AddTaskForm from './AddTaskForm'
import TaskSuggestions from './TaskSuggestions'
import WeeklyGoalCard from './WeeklyGoalCard'

const PlannerPanel = ({
  planner,
  subject,
  subjectId,
  completedTopics,
  onAddTask,
  onCompleteTask,
  onDeleteTask,
  onStartPomodoro,
  onPausePomodoro,
  onResetPomodoro,
  onUpdateDailyGoal,
  onResetDailyGoal,
  onUpdateWeeklyGoal,
}) => {
  const [completedThisWeek, setCompletedThisWeek] = useState(0)

  // Calculate how many levels were completed this week
  useEffect(() => {
    const weekStart = getMondayOfWeek()
    let count = 0

    // Count completed topics from this week (this is a simplified version)
    // In production, you'd track the completion date for each topic
    if (completedTopics) {
      const topicKeys = Object.keys(completedTopics)
      const thisSubjectTopics = topicKeys.filter((key) => key.startsWith(`${subjectId}:`))
      count = thisSubjectTopics.filter((key) => completedTopics[key]).length
    }

    setCompletedThisWeek(count)
  }, [completedTopics, subjectId])

  return (
    <div className="space-y-4">
      {/* Streak */}
      <StreakTracker streak={planner.streak} />

      {/* Study Goal */}
      <StudyGoalCard
        goal={planner.dailyGoal}
        onUpdate={onUpdateDailyGoal}
        onReset={onResetDailyGoal}
      />

      {/* Pomodoro */}
      <PomodoroTimer
        timer={planner.pomodoroSession}
        onStart={onStartPomodoro}
        onPause={onPausePomodoro}
        onReset={onResetPomodoro}
      />

      {/* Task List */}
      <TaskList
        tasks={planner.tasks}
        subject={subject}
        onComplete={onCompleteTask}
        onDelete={onDeleteTask}
      />

      {/* Add Task Form */}
      <AddTaskForm subject={subject} onAdd={onAddTask} />

      {/* Task Suggestions */}
      <TaskSuggestions
        subject={subject}
        completedTopics={completedTopics}
        subjectId={subjectId}
        onAddSuggested={onAddTask}
      />

      {/* Weekly Goal */}
      <WeeklyGoalCard
        weeklyGoal={planner.weeklyGoal}
        completedThisWeek={completedThisWeek}
        onUpdate={onUpdateWeeklyGoal}
      />
    </div>
  )
}

export default PlannerPanel
