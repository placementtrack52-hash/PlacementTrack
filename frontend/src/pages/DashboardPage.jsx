import { subDays, format } from 'date-fns'
import { AtSign, BookOpen, CalendarCheck, Clock3, Lock, Mail, Sparkles, Star, Trophy, Target } from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import subjects from '../data/subjects.json'
import quotes from '../data/quotes.json'
import PageShell from '../components/PageShell'
import ProgressBar from '../components/ProgressBar'
import StatCard from '../components/StatCard'
import Footer from '../components/Footer'
import MiniGamesSection from '../components/MiniGamesSection'
import { selectOverallCompanyPrepProgress } from '../features/companyPrep/companyPrepSlice'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'

const subjectChartColors = ['#f59e0b', '#10b981', '#3b82f6', '#8b5cf6']
const learningModulesCopy = {
  short: [
    'Start small. Stay sharp.',
    'Progress beats pressure.',
    'One module. One win.',
    'Show up before motivation does.',
    'Keep the streak honest.',
    'Learn it. Use it. Repeat.',
    'Your edge is built daily.',
    'Less noise, more reps.',
    'Today counts more than perfect.',
    'Keep moving, even briefly.',
  ],
  medium: [
    'Small sessions done daily build more confidence than random long study marathons.',
    'Finish one focused module now, and let momentum handle the next.',
    'Consistency looks simple, but it changes results fast.',
    'You do not need more time, just a cleaner start.',
    'Treat every practice round like future proofing.',
    'Keep your prep tight, clear, and repeatable.',
    'The goal is not intensity today, but return tomorrow.',
    'Strong candidates train before they feel fully ready.',
    'You are closer when you stop skipping the basics.',
    'Do one useful thing now, then build from there.',
  ],
  banner: [
    'Build placement-ready skills, one focused session at a time.',
    'Sharp prep. Clear goals. Real progress.',
    'Turn daily effort into interview confidence.',
    'Stay consistent long enough to become undeniable.',
    'Keep the routine simple, and let the results grow.',
  ],
}
const badgeAccentMap = {
  Milestone: 'from-amber-200 via-orange-100 to-white',
  Subject: 'from-sky-200 via-cyan-100 to-white',
  Streak: 'from-emerald-200 via-teal-100 to-white',
  Mastery: 'from-fuchsia-200 via-rose-100 to-white',
  Accuracy: 'from-rose-200 via-pink-100 to-white',
  Speed: 'from-violet-200 via-purple-100 to-white',
  Volume: 'from-blue-200 via-indigo-100 to-white',
  Special: 'from-orange-200 via-amber-100 to-white',
}

// Tier color mapping
const tierColors = {
  bronze: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-300', gradient: 'from-amber-400 to-amber-600' },
  silver: { bg: 'bg-slate-200', text: 'text-slate-600', border: 'border-slate-400', gradient: 'from-slate-300 to-slate-500' },
  gold: { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-400', gradient: 'from-yellow-400 to-yellow-600' },
  platinum: { bg: 'bg-cyan-100', text: 'text-cyan-700', border: 'border-cyan-400', gradient: 'from-cyan-400 to-cyan-600' },
  diamond: { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-400', gradient: 'from-violet-400 to-purple-600' },
}

// Progress Ring Component
const ProgressRing = ({ progress, size = 36 }) => {
  const strokeWidth = 3
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference
  
  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="transparent"
        className="text-slate-200 dark:text-slate-700"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="text-amber-500"
      />
    </svg>
  )
}

const tooltipStyle = {
  backgroundColor: '#111827',
  border: '1px solid rgba(148, 163, 184, 0.2)',
  borderRadius: '16px',
  color: '#f8fafc',
}

const StudySection = () => {
  const navigate = useNavigate()
  const studyCards = [
    {
      title: 'Aptitude',
      subtitle: 'Build speed, accuracy, and confidence with quantitative practice.',
      path: '/aptitude',
      className:
        'border border-orange-100 bg-gradient-to-br from-orange-50 via-amber-50 to-white hover:border-orange-200',
    },
    {
      title: 'Reasoning',
      subtitle: 'Sharpen logic and structured problem solving with focused drills.',
      path: '/reasoning',
      className:
        'border border-sky-100 bg-gradient-to-br from-sky-50 via-blue-50 to-white hover:border-sky-200',
    },
    {
      title: 'Verbal',
      subtitle: 'Improve reading, vocabulary, and language clarity step by step.',
      path: '/verbal',
      className:
        'border border-violet-100 bg-gradient-to-br from-violet-50 via-purple-50 to-white hover:border-violet-200',
    },
    {
      title: 'Code Learning',
      subtitle: 'Master data structures, algorithms, and practical coding.',
      path: '/subjects/code',
      className:
        'border border-emerald-100 bg-gradient-to-br from-emerald-50 via-green-50 to-white hover:border-emerald-200',
    },
    {
      title: 'Interview Question',
      subtitle: 'Real interview scenarios, questions, and expert answers.',
      path: '/subjects/interview-question',
      className:
        'border border-rose-100 bg-gradient-to-br from-rose-50 via-pink-50 to-white hover:border-rose-200',
    },
  ]

  return (
    <div className="mt-6">
    <div className="mb-5 flex items-center justify-between">
      <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">
        Study
      </h2>
      <span className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-md">
        Your workspace
      </span>
    </div>
    <div className="grid gap-5 md:grid-cols-2">
      <Link
        to="/notes"
        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-6 shadow-soft transition-all hover:scale-[1.02] hover:shadow-lg dark:border-slate-700 dark:from-[#1a1510] dark:via-[#1f1812] dark:to-[#1a1510]"
      >
        <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 translate-y-[-50%] rounded-full bg-gradient-to-br from-amber-200/40 to-orange-200/40 blur-2xl" />
        <div className="relative">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-ink dark:text-white">Notes</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Capture and organize your learning insights, key concepts, and quick references.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-amber-700 shadow-sm dark:bg-slate-800/60 dark:text-amber-300">
              View Notes
            </span>
            <span className="text-xs font-medium text-slate-400">→</span>
          </div>
        </div>
      </Link>

      <Link
        to="/daily-routine"
        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6 shadow-soft transition-all hover:scale-[1.02] hover:shadow-lg dark:border-slate-700 dark:from-[#0f1f1a] dark:via-[#122620] dark:to-[#0f1f1a]"
      >
        <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 translate-y-[-50%] rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-200/40 blur-2xl" />
        <div className="relative">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
            <CalendarCheck className="h-6 w-6 text-white" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-ink dark:text-white">Daily Routine</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Plan and track your daily study schedule with structured routines and time blocks.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm dark:bg-slate-800/60 dark:text-emerald-300">
              Manage Routine
            </span>
            <span className="text-xs font-medium text-slate-400">→</span>
          </div>
        </div>
      </Link>
    </div>

    <div className="mt-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink dark:text-white">Let&apos;s Start</h3>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          Pick a subject and jump in
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {studyCards.map((card) => (
          <button
            key={card.title}
            type="button"
            onClick={() => navigate(card.path)}
            className={`group rounded-2xl p-5 text-left shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:focus:ring-offset-[#0f1720] ${card.className}`}
          >
            <div className="flex h-full min-h-[180px] flex-col justify-between">
              <div>
                <h4 className="text-lg font-semibold text-ink dark:text-white">{card.title}</h4>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
                  {card.subtitle}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-ink transition-colors group-hover:text-emerald-700 dark:text-slate-100 dark:group-hover:text-emerald-300">
                Start now
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  </div>
  )
}

const DashboardPage = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const companyPrepProgress = useAppSelector(selectOverallCompanyPrepProgress)
  const {
    progress,
    completedCount,
    accuracy,
    averageTimePerQuestion,
    speedScore,
    badges,
    subjectQuizProgress,
    streakDays,
    weaknessSummary,
    masterySummary,
    learnerLevel,
    fakeRanking,
  } = useProgress()

  const totalQuizLevels = Object.values(subjectQuizProgress).reduce(
    (sum, subject) => sum + subject.totalLevels,
    0,
  )
  const completedQuizLevels = Object.values(subjectQuizProgress).reduce(
    (sum, subject) => sum + subject.completedLevels,
    0,
  )
  const combinedCompletedCount = completedQuizLevels + companyPrepProgress.completedCount
  const combinedTotalCount = totalQuizLevels + companyPrepProgress.totalCount
  const completedRatio = combinedTotalCount
    ? Math.round((combinedCompletedCount / combinedTotalCount) * 100)
    : 0
  const unlockedBadges = badges.filter((badge) => badge.unlocked)
  const lockedBadges = badges.filter((badge) => !badge.unlocked)
  const unlockedBadgeCount = unlockedBadges.length
  const lockedBadgeCount = lockedBadges.length
  
  const tierRanking = { diamond: 5, platinum: 4, gold: 3, silver: 2, bronze: 1 }
  const sortedUnlocked = [...unlockedBadges].sort((a, b) => (tierRanking[b.tier] || 0) - (tierRanking[a.tier] || 0))
  const bestBadge = sortedUnlocked.length > 0 ? sortedUnlocked[0] : null
  
  const mysteryBadges = lockedBadges.slice(0, 3)
  const welcomeMessage = quotes[(completedCount + streakDays) % quotes.length]
  const learningBanner =
    learningModulesCopy.banner[(completedCount + streakDays) % learningModulesCopy.banner.length]
  const learningSupport =
    learningModulesCopy.medium[(completedCount + unlockedBadgeCount) % learningModulesCopy.medium.length]
  const moduleNudges = {
    roadmap: learningModulesCopy.short[(streakDays + 1) % learningModulesCopy.short.length],
    cheatSheet: learningModulesCopy.short[(completedCount + 3) % learningModulesCopy.short.length],
    lastMinute: learningModulesCopy.short[(combinedCompletedCount + 5) % learningModulesCopy.short.length],
    practice: learningModulesCopy.short[(accuracy + 7) % learningModulesCopy.short.length],
  }

  const subjectProgressChartData = subjects
    .filter((subject) => subject.id !== 'interview-question')
    .map((subject) => ({
      name: subject.name,
      value: subjectQuizProgress[subject.id]?.progressPercent ?? 0,
      completed: subjectQuizProgress[subject.id]?.completedLevels ?? 0,
      total: subjectQuizProgress[subject.id]?.totalLevels ?? 0,
    }))

  const subjectWiseProgressData = [
    ...subjectProgressChartData,
    {
      name: 'Company Prep',
      value: companyPrepProgress.progressPercent,
      completed: companyPrepProgress.completedCount,
      total: companyPrepProgress.totalCount,
    },
  ]

  const allProgressEntries = [
    ...Object.entries(progress.quizResults).flatMap(([topicKey, levels]) =>
      Object.values(levels).map((result) => ({
        topicKey,
        completedAt: result?.completedAt,
      })),
    ),
    ...Object.entries(progress.finalTests).map(([topicKey, result]) => ({
      topicKey,
      completedAt: result?.completedAt,
    })),
    ...Object.values(progress.dailyChallenges).map((result) => ({
      topicKey: 'daily-challenge',
      completedAt: result?.completedAt,
    })),
  ].filter((entry) => entry.completedAt)

  const dailyProgressMap = allProgressEntries.reduce((acc, entry) => {
    const dayKey = format(new Date(entry.completedAt), 'yyyy-MM-dd')
    acc[dayKey] = (acc[dayKey] ?? 0) + 1
    return acc
  }, {})

  const dailyProgressChartData = Array.from({ length: 7 }, (_, index) => {
    const date = subDays(new Date(), 6 - index)
    const dayKey = format(date, 'yyyy-MM-dd')
    return {
      day: format(date, 'EEE'),
      progress: dailyProgressMap[dayKey] ?? 0,
    }
  })

  const masteryTopicKeys = new Set(masterySummary.masteredTopics.map((topic) => topic.topicKey))
  const strongWeakTopicsBySubject = subjects.map((subject) => {
    const topicIds = subject.topics.map((topic) => `${subject.id}:${topic.id}`)
    const weakTopicCount = weaknessSummary.filter((item) => item.topicKey.startsWith(`${subject.id}:`)).length
    const strongTopicCount = topicIds.filter((topicKey) => masteryTopicKeys.has(topicKey)).length

    return {
      subject: subject.name,
      strong: strongTopicCount,
      weak: weakTopicCount,
    }
  }).filter((item) => item.subject !== 'Interview Question')
  return (
    <PageShell
      title="Your dashboard"
      subtitle={`${user?.name}, here is your AI-style prep cockpit: progress, speed, weaknesses, streaks, and the next best thing to revise.`}
      actions={
        <>
          <Link
            to="/subjects"
            className="flex min-h-[44px] w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] dark:bg-white dark:text-[#0f1720] sm:w-auto"
          >
            Continue learning
          </Link>
          <Link
            to="/challenge"
            className="flex min-h-[44px] w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm ring-1 ring-slate-200/50 transition-transform hover:scale-[1.02] dark:bg-zinc-800 dark:text-white dark:ring-white/10 sm:w-auto"
          >
            Daily challenge
          </Link>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <StatCard
          label="Quiz Levels Done"
          value={`${completedQuizLevels}/${totalQuizLevels}`}
          helper="Progress moves when quiz levels are completed."
          accent="bg-white dark:bg-[#101a2b]"
        />
        <StatCard
          label="Accuracy"
          value={`${accuracy}%`}
          helper="Across quizzes, finals, and challenge."
          accent="bg-[#fff4e9] dark:bg-[#221a16]"
        />
        <StatCard
          label="Daily Streak"
          value={`${streakDays} days`}
          helper="Any learning action keeps it alive."
          accent="bg-[#eef7f2] dark:bg-[#13261f]"
        />
        <StatCard
          label="Level"
          value={learnerLevel.name}
          helper={`${progress.points} XP collected so far`}
          accent="bg-[#f8f0ff] dark:bg-[#1d1830]"
        />
        <StatCard
          label="Speed Score"
          value={speedScore}
          helper={`${averageTimePerQuestion || '--'} sec per question on average`}
          accent="bg-[#edf4ff] dark:bg-[#162338]"
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2 md:gap-6">
        {/* LEFT: Subject Progress */}
        <section className="h-full rounded-2xl bg-white p-5 shadow-md transition-all duration-300 hover:shadow-xl dark:border dark:border-slate-700/60 dark:bg-[#0f1b2d]">
          <div className="flex items-center justify-between gap-3 mb-5">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">
              Subject-wise progress
            </h2>
            <span className="rounded-full bg-sand px-4 py-2 text-sm font-medium text-moss dark:bg-[#1a2a40] dark:text-emerald-300">
              Overall {completedRatio}%
            </span>
          </div>
          
          <div className="space-y-3 flex flex-col h-full">
            {subjects
              .filter((subject) => subject.id !== 'interview-question')
              .map((subject) => {
                const summary = subjectQuizProgress[subject.id]
                const subjectProgress = summary?.progressPercent ?? 0
                
                // Subject-specific accent colors
                const subjectAccents = {
                  'aptitude': { bg: 'bg-orange-50 dark:bg-orange-950/20', bar: 'from-orange-400 to-amber-500', hoverBg: 'dark:hover:bg-orange-950/30', label: 'text-orange-700 dark:text-orange-300' },
                  'reasoning': { bg: 'bg-emerald-50 dark:bg-emerald-950/20', bar: 'from-emerald-400 to-teal-500', hoverBg: 'dark:hover:bg-emerald-950/30', label: 'text-emerald-700 dark:text-emerald-300' },
                  'verbal': { bg: 'bg-purple-50 dark:bg-purple-950/20', bar: 'from-purple-400 to-violet-500', hoverBg: 'dark:hover:bg-purple-950/30', label: 'text-purple-700 dark:text-purple-300' },
                  'technical': { bg: 'bg-blue-50 dark:bg-blue-950/20', bar: 'from-blue-400 to-cyan-500', hoverBg: 'dark:hover:bg-blue-950/30', label: 'text-blue-700 dark:text-blue-300' },
                }
                const accent = subjectAccents[subject.id] || subjectAccents.aptitude

                return (
                  <Link
                    key={subject.id}
                    to={`/subjects/${subject.id}`}
                    className={`block rounded-[1.25rem] ${accent.bg} p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${accent.hoverBg} focus:outline-none focus:ring-2 focus:ring-offset-2 dark:border dark:border-slate-700/40`}
                  >
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <span className={`text-sm font-semibold ${accent.label} truncate`}>
                          {subject.name}
                        </span>
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap ${accent.label} bg-white/40 dark:bg-white/10`}>
                          {subjectProgress < 33 ? 'Beginner' : subjectProgress < 66 ? 'Intermediate' : 'Advanced'}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-slate dark:text-slate-400 whitespace-nowrap">
                        {summary?.completedLevels ?? 0}/{summary?.totalLevels ?? 0}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/60 dark:bg-white/10">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${accent.bar} transition-all duration-500`}
                          style={{ width: `${Math.max(0, Math.min(100, subjectProgress))}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate dark:text-slate-400 whitespace-nowrap">
                        {Math.round(subjectProgress)}%
                      </span>
                    </div>
                  </Link>
                )
              })}
            
            {/* Company Preparation Row */}
            <Link
              to="/company-prep"
              className="block rounded-[1.25rem] bg-teal-50 dark:bg-teal-950/20 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:bg-teal-950/30 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:border dark:border-slate-700/40"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <span className="text-sm font-semibold text-teal-700 dark:text-teal-300 truncate">
                    Company Preparation
                  </span>
                  <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap text-teal-700 dark:text-teal-300 bg-white/40 dark:bg-white/10">
                    {companyPrepProgress.progressPercent < 33 ? 'Starting' : companyPrepProgress.progressPercent < 66 ? 'In Progress' : 'Mastering'}
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate dark:text-slate-400 whitespace-nowrap">
                  {companyPrepProgress.completedCount}/{companyPrepProgress.totalCount}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/60 dark:bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-500"
                    style={{ width: `${Math.max(0, Math.min(100, companyPrepProgress.progressPercent))}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-slate dark:text-slate-400 whitespace-nowrap">
                  {Math.round(companyPrepProgress.progressPercent)}%
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* RIGHT: Learning Modules */}
        <section className="rounded-2xl bg-white p-5 shadow-md transition-all duration-300 hover:shadow-xl dark:border dark:border-slate-700/60 dark:bg-[#0f1b2d]">
          <div className="mb-4 rounded-2xl border border-[#d9e6dc] bg-gradient-to-r from-[#f7fbf8] via-[#eef7f2] to-[#edf6ff] p-4 dark:border-slate-700/60 dark:from-[#132033] dark:via-[#10281f] dark:to-[#142133]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f766e] dark:text-emerald-300">
              Learning Modules
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold text-ink dark:text-white">
              {learningBanner}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              {learningSupport}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Link
              to="/roadmap"
              className="group relative flex min-h-[170px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-[#fcfcf9] via-[#f5f7ef] to-[#eef4e8] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md dark:border-slate-700/60 dark:bg-gradient-to-br dark:from-[#162235] dark:via-[#1a2a3f] dark:to-[#122031]"
            >
              <div className="absolute right-0 top-0 h-20 w-20 translate-x-5 -translate-y-5 rounded-full bg-emerald-200/45 blur-2xl dark:bg-emerald-500/10" />
              <span className="relative text-base font-semibold text-ink dark:text-white">Roadmap</span>
<span className="relative mt-2 max-w-[12rem] text-xs leading-5 text-slate-600 dark:text-slate-300">
                Follow a structured plan to move topic by topic with clarity.
              </span>
<span className="mt-auto self-start rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-600 shadow-sm transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-500/20 dark:text-white dark:group-hover:bg-emerald-500 dark:text-black">
                View
              </span>
            </Link>
            <Link
              to="/cheatsheet"
              className="group relative flex min-h-[170px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-[#fbfcff] via-[#f2f7f8] to-[#e9f3f1] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md dark:border-slate-700/60 dark:bg-gradient-to-br dark:from-[#162235] dark:via-[#1a2a3f] dark:to-[#122031]"
            >
              <div className="absolute right-0 top-0 h-20 w-20 translate-x-5 -translate-y-5 rounded-full bg-teal-200/45 blur-2xl dark:bg-teal-500/10" />
              <span className="relative text-base font-semibold text-ink dark:text-white">Cheat Sheet</span>
              <span className="relative mt-2 max-w-[12rem] text-xs leading-5 text-slate-600 dark:text-slate-300">
                Get compact formulas, shortcuts, and high-value concepts fast.
              </span>
              <span className="mt-auto self-start rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-600 shadow-sm transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-500/20 dark:text-white dark:group-hover:bg-emerald-500 dark:text-black">
                Browse
              </span>
            </Link>
            <Link
              to="/last-minute"
              className="group relative flex min-h-[170px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-[#fffdf8] via-[#f8f5ee] to-[#f1eee5] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md dark:border-slate-700/60 dark:bg-gradient-to-br dark:from-[#162235] dark:via-[#1a2a3f] dark:to-[#122031]"
            >
              <div className="absolute right-0 top-0 h-20 w-20 translate-x-5 -translate-y-5 rounded-full bg-amber-200/45 blur-2xl dark:bg-amber-500/10" />
              <span className="relative text-base font-semibold text-ink dark:text-white">Last Minute</span>
              <span className="relative mt-2 max-w-[12rem] text-xs leading-5 text-slate-600 dark:text-slate-300">
                Focus on the most likely asks before your test or interview.
              </span>
              <span className="mt-auto self-start rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-600 shadow-sm transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-500/20 dark:text-white dark:group-hover:bg-emerald-500 dark:text-black">
                Quick
              </span>
            </Link>
            <Link
              to="/practice-feedback"
              className="group relative flex min-h-[170px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-[#f8fbff] via-[#eef4fa] to-[#e8eef8] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md dark:border-slate-700/60 dark:bg-gradient-to-br dark:from-[#162235] dark:via-[#1a2a3f] dark:to-[#122031]"
            >
              <div className="absolute right-0 top-0 h-20 w-20 translate-x-5 -translate-y-5 rounded-full bg-sky-200/45 blur-2xl dark:bg-sky-500/10" />
              <span className="relative text-base font-semibold text-ink dark:text-white">Practice</span>
              <span className="relative mt-2 max-w-[12rem] text-xs leading-5 text-slate-600 dark:text-slate-300">
                Revisit attempts, feedback, and patterns to improve smarter.
              </span>
              <span className="mt-auto self-start rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-600 shadow-sm transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-500/20 dark:text-white dark:group-hover:bg-emerald-500 dark:text-black">
                Open
              </span>
            </Link>
          </div>
        </section>
      </div>

      {/* Smart Features Section */}
      <div className="mt-6">
        <div className="mb-4">
          <h2 className="font-display text-lg font-semibold text-ink dark:text-white">
            Boost your placement
          </h2>
          <p className="mt-1 text-sm text-slate dark:text-slate-300">
            AI tools and resources to ace your interview and land your dream job.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* AI Interview Coach */}
          <button
            onClick={() => navigate('/interview-coach')}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-purple-200/50 bg-gradient-to-br from-purple-50 via-purple-50 to-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-purple-300 dark:border-purple-900/40 dark:bg-gradient-to-br dark:from-purple-950/40 dark:via-purple-950/30 dark:to-[#0f1b2d] dark:hover:border-purple-800/60 text-left"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300/0 via-transparent to-purple-400/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative flex flex-col h-full">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-200/70 dark:bg-purple-800/50 text-xl">
                🤖
              </span>
              <h3 className="mt-3 text-base font-bold text-ink dark:text-white">
                AI Interview
              </h3>
              <p className="mt-1.5 text-xs text-slate dark:text-slate-400 leading-relaxed flex-1">
                Practice mock interviews with real-time feedback from AI
              </p>
              <span className="mt-4 inline-flex rounded-lg bg-purple-600 px-4 py-2 text-xs font-bold text-white transition-all duration-200 group-hover:bg-purple-700 w-full justify-center">
                Start Practice
              </span>
            </div>
          </button>

          {/* ATS Resume Analyzer */}
          <button
            onClick={() => navigate('/subjects/ats-resume-checker')}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-green-200/50 bg-gradient-to-br from-green-50 via-green-50 to-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-green-300 dark:border-green-900/40 dark:bg-gradient-to-br dark:from-green-950/40 dark:via-green-950/30 dark:to-[#0f1b2d] dark:hover:border-green-800/60 text-left"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-300/0 via-transparent to-green-400/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative flex flex-col h-full">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-200/70 dark:bg-green-800/50 text-xl">
                📄
              </span>
              <h3 className="mt-3 text-base font-bold text-ink dark:text-white">
                ATS Analyzer
              </h3>
              <p className="mt-1.5 text-xs text-slate dark:text-slate-400 leading-relaxed flex-1">
                Optimize your resume and boost your ATS score instantly
              </p>
              <span className="mt-4 inline-flex rounded-lg bg-green-600 px-4 py-2 text-xs font-bold text-white transition-all duration-200 group-hover:bg-green-700 w-full justify-center">
                Analyze Now
              </span>
            </div>
          </button>

          {/* Projects */}
          <button
            onClick={() => navigate('/subjects/projects')}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-orange-200/50 bg-gradient-to-br from-orange-50 via-orange-50 to-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-orange-300 dark:border-orange-900/40 dark:bg-gradient-to-br dark:from-orange-950/40 dark:via-orange-950/30 dark:to-[#0f1b2d] dark:hover:border-orange-800/60 text-left"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300/0 via-transparent to-orange-400/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative flex flex-col h-full">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-200/70 dark:bg-orange-800/50 text-xl">
                🛠️
              </span>
              <h3 className="mt-3 text-base font-bold text-ink dark:text-white">
                Projects
              </h3>
              <p className="mt-1.5 text-xs text-slate dark:text-slate-400 leading-relaxed flex-1">
                Build portfolio projects that impress recruiters
              </p>
              <span className="mt-4 inline-flex rounded-lg bg-orange-600 px-4 py-2 text-xs font-bold text-white transition-all duration-200 group-hover:bg-orange-700 w-full justify-center">
                View Projects
              </span>
            </div>
          </button>

          {/* Placement Notes */}
          <button
            onClick={() => navigate('/placement-notes')}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-amber-200/50 bg-gradient-to-br from-amber-50 via-amber-50 to-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-amber-300 dark:border-amber-900/40 dark:bg-gradient-to-br dark:from-amber-950/40 dark:via-amber-950/30 dark:to-[#0f1b2d] dark:hover:border-amber-800/60 text-left"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300/0 via-transparent to-amber-400/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative flex flex-col h-full">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-200/70 dark:bg-amber-800/50 text-xl">
                📚
              </span>
              <h3 className="mt-3 text-base font-bold text-ink dark:text-white">
                Placement Notes
              </h3>
              <p className="mt-1.5 text-xs text-slate dark:text-slate-400 leading-relaxed flex-1">
                Company-wise prep guides and interview resources
              </p>
              <span className="mt-4 inline-flex rounded-lg bg-amber-600 px-4 py-2 text-xs font-bold text-white transition-all duration-200 group-hover:bg-amber-700 w-full justify-center">
                Open Notes
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {/* LEFT: Weakness Detector */}
        <section className="flex h-full flex-col rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl dark:border dark:border-slate-700/60 dark:bg-[#0f1b2d]">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-lg font-semibold text-ink dark:text-white">
              Weakness Detector
            </h2>
            <Link
              to="/mistakes"
              className="text-sm font-semibold text-moss dark:text-emerald-300"
            >
              Open notebook
            </Link>
          </div>
          <div className="space-y-4">
            {weaknessSummary.length ? (
              weaknessSummary.map((item) => (
                <div
                  key={`${item.topicKey}-${item.weaknessLabel}`}
                  className="rounded-xl bg-[#faf6f0] p-4 dark:border dark:border-slate-700/50 dark:bg-[#162235]"
                >
                  <p className="font-semibold text-ink dark:text-white">
                    You are weak in {item.topicName} - {item.weaknessLabel}
                  </p>
                  <p className="mt-1 text-sm text-slate dark:text-slate-300">
                    Review notes, revisit mistakes, and retry one quiz level in
                    accuracy mode.
                  </p>
                </div>
              ))
            ) : (
              <div className="rounded-xl bg-[#faf6f0] p-4 text-sm text-slate dark:border dark:border-slate-700/50 dark:bg-[#162235] dark:text-slate-300">
                Once you make a few mistakes in quizzes, smart weakness hints
                will start showing here.
              </div>
            )}
          </div>
        </section>

        {/* RIGHT: Study Section */}
        <section className="rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl dark:border dark:border-slate-700/60 dark:bg-[#0f1b2d]">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-lg font-semibold text-ink dark:text-white">
              Study
            </h2>
            <span className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-2 py-1 text-xs font-medium text-white">
              Your workspace
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/notes"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-4 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:from-[#1a1510] dark:via-[#1f1812] dark:to-[#1a1510]"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-5 translate-y-[-20%] rounded-full bg-gradient-to-br from-amber-200/35 to-orange-200/35 blur-2xl" />
              <div className="relative flex min-h-[92px] items-center gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-sm">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-ink dark:text-white">Notes</h3>
                  <span className="text-[10px] text-amber-700 dark:text-amber-300">View →</span>
                </div>
              </div>
            </Link>

            <Link
              to="/daily-routine"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 px-4 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:from-[#0f1f1a] dark:via-[#122620] dark:to-[#0f1f1a]"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-5 translate-y-[-20%] rounded-full bg-gradient-to-br from-emerald-200/35 to-teal-200/35 blur-2xl" />
              <div className="relative flex min-h-[92px] items-center gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-sm">
                  <CalendarCheck className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-ink dark:text-white">Daily Routine</h3>
                  <span className="text-[10px] text-emerald-700 dark:text-emerald-300">Manage →</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-4 flex flex-1 flex-col rounded-xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-700/60 dark:bg-[#162235]">
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="text-base font-semibold text-ink dark:text-white">Let&apos;s Start</h3>
              <span className="text-xs text-slate-500 dark:text-slate-400">Choose a subject</span>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              <Link
                to="/subjects/aptitude"
                className="flex min-h-[120px] items-end rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 via-amber-50 to-white px-4 py-4 text-sm font-semibold text-orange-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-orange-900/40 dark:from-[#2a1b10] dark:via-[#24180f] dark:to-[#1f160f] dark:text-orange-200"
              >
                <div>
                  <span className="block text-base font-semibold">Aptitude</span>
                  <span className="mt-1 block text-xs font-medium text-orange-700/80 dark:text-orange-200/80">
                    Quantitative practice
                  </span>
                </div>
              </Link>
              <Link
                to="/subjects/reasoning"
                className="flex min-h-[120px] items-end rounded-xl border border-sky-100 bg-gradient-to-br from-sky-50 via-blue-50 to-white px-4 py-4 text-sm font-semibold text-sky-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-sky-900/40 dark:from-[#111d28] dark:via-[#101a24] dark:to-[#0d1720] dark:text-sky-200"
              >
                <div>
                  <span className="block text-base font-semibold">Reasoning</span>
                  <span className="mt-1 block text-xs font-medium text-sky-700/80 dark:text-sky-200/80">
                    Logic and pattern drills
                  </span>
                </div>
              </Link>
              <Link
                to="/subjects/verbal"
                className="flex min-h-[120px] items-end rounded-xl border border-violet-100 bg-gradient-to-br from-violet-50 via-purple-50 to-white px-4 py-4 text-sm font-semibold text-violet-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-violet-900/40 dark:from-[#211427] dark:via-[#1c1323] dark:to-[#17101d] dark:text-violet-200"
              >
                <div>
                  <span className="block text-base font-semibold">Verbal</span>
                  <span className="mt-1 block text-xs font-medium text-violet-700/80 dark:text-violet-200/80">
                    Reading and language skills
                  </span>
                </div>
              </Link>
              <Link
                to="/subjects/technical"
                className="flex min-h-[120px] items-end rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-blue-50 to-white px-4 py-4 text-sm font-semibold text-indigo-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-indigo-900/40 dark:from-[#151b30] dark:via-[#12182a] dark:to-[#0f1523] dark:text-indigo-200"
              >
                <div>
                  <span className="block text-base font-semibold">Technical</span>
                  <span className="mt-1 block text-xs font-medium text-indigo-700/80 dark:text-indigo-200/80">
                    Python, C, C++, Java, SQL
                  </span>
                </div>
              </Link>
              <Link
                to="/subjects/code"
                className="flex min-h-[120px] items-end rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-green-50 to-white px-4 py-4 text-sm font-semibold text-emerald-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-emerald-900/40 dark:from-[#13261f] dark:via-[#10201a] dark:to-[#0d1a15] dark:text-emerald-200"
              >
                <div>
                  <span className="block text-base font-semibold">Code Learning</span>
                  <span className="mt-1 block text-xs font-medium text-emerald-700/80 dark:text-emerald-200/80">
                    DSA and Problem Solving
                  </span>
                </div>
              </Link>
              <Link
                to="/subjects/interview-question"
                className="flex min-h-[120px] items-end rounded-xl border border-rose-100 bg-gradient-to-br from-rose-50 via-pink-50 to-white px-4 py-4 text-sm font-semibold text-rose-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-rose-900/40 dark:from-[#2a131a] dark:via-[#201015] dark:to-[#1a0c10] dark:text-rose-200"
              >
                <div>
                  <span className="block text-base font-semibold">Interview Question</span>
                  <span className="mt-1 block text-xs font-medium text-rose-700/80 dark:text-rose-200/80">
                    Real QA and Scenarios
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>

        <div className="mt-3 rounded-2xl bg-white p-4 shadow-md dark:border dark:border-slate-700/60 dark:bg-[#0f1b2d]">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink dark:text-white">
              Visual analytics
            </h2>
            <p className="text-xs text-slate dark:text-slate-300">
              Real charts powered by your subject-wise progress, recent activity, and topic mastery.
            </p>
          </div>
          <span className="text-xs text-slate dark:text-slate-300">
            Live dashboard insights
          </span>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <section className="rounded-xl bg-[#faf6f0] p-3 dark:border dark:border-slate-700/50 dark:bg-[#162235]">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-semibold text-ink dark:text-white">
                  Subject-wise performance
                </p>
                <p className="mt-0.5 text-xs text-slate dark:text-slate-300">
                  Share of current progress across subjects.
                </p>
              </div>
              <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-slate shadow-sm dark:bg-[#213149] dark:text-slate-200">
                Pie
              </span>
            </div>

            <div className="mt-3 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={subjectWiseProgressData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={65}
                    paddingAngle={3}
                  >
                    {subjectWiseProgressData.map((entry, index) => (
                      <Cell key={entry.name} fill={subjectChartColors[index % subjectChartColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(value, name, item) => [
                      `${value}% progress`,
                      `${name} (${item.payload.completed}/${item.payload.total})`,
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-2 grid gap-2">
              {subjectWiseProgressData.map((item, index) => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: subjectChartColors[index % subjectChartColors.length] }}
                    />
                    <span className="text-ink dark:text-white">{item.name}</span>
                  </div>
                  <span className="text-slate dark:text-slate-300">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-[#faf6f0] p-3 dark:border dark:border-slate-700/50 dark:bg-[#162235]">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-semibold text-ink dark:text-white">
                  Daily progress
                </p>
                <p className="mt-0.5 text-xs text-slate dark:text-slate-300">
                  Tracked quiz, final, and challenge completions.
                </p>
              </div>
              <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-slate shadow-sm dark:bg-[#213149] dark:text-slate-200">
                Line
              </span>
            </div>

            <div className="mt-3 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyProgressChartData}>
                  <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" vertical={false} />
                  <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="#64748b" fontSize={10} />
                  <YAxis allowDecimals={false} tickLine={false} axisLine={false} stroke="#64748b" fontSize={10} />
                  <Tooltip contentStyle={tooltipStyle} formatter={(value) => [`${value}`, 'Progress']} />
                  <Line
                    type="monotone"
                    dataKey="progress"
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={{ r: 3, fill: '#2563eb' }}
                    activeDot={{ r: 4, fill: '#1d4ed8' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="rounded-xl bg-[#faf6f0] p-3 dark:border dark:border-slate-700/50 dark:bg-[#162235]">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-semibold text-ink dark:text-white">
                  Weak vs strong topics
                </p>
                <p className="mt-0.5 text-xs text-slate dark:text-slate-300">
                  Topic counts by subject using signals.
                </p>
              </div>
              <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-slate shadow-sm dark:bg-[#213149] dark:text-slate-200">
                Bar
              </span>
            </div>

            <div className="mt-3 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={strongWeakTopicsBySubject}>
                  <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" vertical={false} />
                  <XAxis dataKey="subject" tickLine={false} axisLine={false} stroke="#64748b" fontSize={10} />
                  <YAxis allowDecimals={false} tickLine={false} axisLine={false} stroke="#64748b" fontSize={10} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Legend iconSize={10} wrapperStyle={{ fontSize: '10px' }} />
                  <Bar dataKey="strong" name="Strong" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="weak" name="Weak" fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>
      </div>

      <MiniGamesSection />

      <div className="mt-4 rounded-2xl bg-white p-4 shadow-md dark:border dark:border-slate-700/60 dark:bg-[#0f1b2d]">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between mb-4">
          <div>
            <div className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
              <Sparkles className="h-3 w-3" />
              Achievement Showcase
            </div>
            <h2 className="mt-2 font-display text-lg font-semibold text-ink dark:text-white">
              Your Trophy Room
            </h2>
          </div>
          <Link
            to="/badges"
            className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 dark:border-white/10 dark:bg-[#162235] dark:text-slate-200 dark:hover:bg-white/5"
          >
            View All Rewards
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          {/* Showcase: Best Badge */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-6 shadow-sm dark:border-white/10 dark:from-[#18253a] dark:to-[#132033] group">
            {/* The Tier Indicator inside the showcase */}
            <div className="absolute top-4 right-4 text-right">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Current Tier
              </p>
              <div className="mt-1 flex items-center justify-end gap-1.5">
                <div className={`h-2 w-2 rounded-full ${bestBadge ? tierColors[bestBadge.tier]?.bg.replace('bg-', 'bg-') : 'bg-slate-300'}`} />
                <span className={`text-xs font-bold capitalize ${bestBadge ? tierColors[bestBadge.tier]?.text : 'text-slate-500'}`}>
                  {bestBadge ? bestBadge.tier : 'Beginner'}
                </span>
              </div>
            </div>

            <div className="flex h-full flex-col items-center justify-center pt-4">
              <div className="relative">
                <div className="absolute -inset-4 animate-pulse rounded-full bg-amber-200/20 blur-xl dark:bg-amber-500/10" />
                <div className="relative flex h-24 w-24 transform items-center justify-center rounded-2xl bg-white shadow-xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-3 group-hover:scale-105 dark:bg-zinc-800 border border-slate-100 dark:border-white/10">
                  <span className="text-5xl filter drop-shadow-md">{bestBadge ? bestBadge.icon : '🎯'}</span>
                </div>
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Top Achievement
              </p>
              <h3 className="mt-1 text-xl font-bold text-slate-800 dark:text-white text-center">
                {bestBadge ? bestBadge.name : 'First Steps'}
              </h3>
              <p className="mt-2 text-center text-sm text-slate-500 dark:text-slate-400 max-w-[200px]">
                {bestBadge ? bestBadge.description : 'Complete a few topics to earn your first major badge!'}
              </p>
              {bestBadge && (
                <div className={`mt-4 inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${tierColors[bestBadge.tier]?.bg} ${tierColors[bestBadge.tier]?.text} border ${tierColors[bestBadge.tier]?.border}`}>
                  {bestBadge.tier === 'diamond' || bestBadge.tier === 'platinum' ? 'Legendary Rarity' : bestBadge.tier === 'gold' ? 'Epic Rarity' : 'Rare Achievement'}
                </div>
              )}
            </div>
          </div>

          {/* Mystery Locked Badges & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Tier Progression */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-black/40">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Road to {learnerLevel.nextTierName}</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {learnerLevel.currentPoints} / {learnerLevel.nextTierPoints} XP
                  </p>
                </div>
                <Trophy className={`h-5 w-5 ${learnerLevel.color}`} />
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/5">
                <div 
                  className={`h-full rounded-full ${learnerLevel.bg} transition-all duration-1000`}
                  style={{ width: `${learnerLevel.progressPercent}%` }} 
                />
              </div>
            </div>

            {/* Mystery Badges Grid */}
            <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-3">
              {mysteryBadges.map((badge, i) => (
                <div key={i} className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 transition-colors hover:border-violet-300 hover:bg-violet-50/50 dark:border-slate-700 dark:bg-zinc-800/30 dark:hover:border-violet-500/50 dark:hover:bg-violet-500/10">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 dark:bg-zinc-800">
                    <Lock className="h-5 w-5 text-slate-400 dark:text-slate-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-violet-400" />
                  </div>
                  <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-wider text-violet-500 dark:text-violet-400">
                    Mystery Goal
                  </p>
                  <p className="mt-1 text-center text-xs font-medium italic text-slate-500 dark:text-slate-400">
                    "{badge.description.replace(/[0-9]+/g, 'X').replace(/Complete|Answer|Score|Maintain/, 'Master the').substring(0, 30)}..."
                  </p>
                  
                  {/* Subtle hover effect light */}
                  <div className="absolute inset-0 -translate-y-full bg-gradient-to-b from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-y-full dark:via-white/5" />
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>

      <Footer />
    </PageShell>
  )
}

export default DashboardPage
