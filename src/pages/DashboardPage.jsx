import { Link } from 'react-router-dom'
import subjects from '../data/subjects.json'
import quotes from '../data/quotes.json'
import PageShell from '../components/PageShell'
import ProgressBar from '../components/ProgressBar'
import StatCard from '../components/StatCard'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'

const DashboardPage = () => {
  const { user } = useAuth()
  const {
    progress,
    completedCount,
    accuracy,
    averageTimePerQuestion,
    speedScore,
    badges,
    subjectCompletion,
    masterySummary,
    streakDays,
    weaknessSummary,
    revisionReminders,
    learnerLevel,
    fakeRanking,
    dailyChallenge,
  } = useProgress()

  const totalTopics = subjects.reduce((sum, subject) => sum + subject.topics.length, 0)
  const completedRatio = totalTopics ? Math.round((completedCount / totalTopics) * 100) : 0
  const welcomeMessage = quotes[(completedCount + streakDays) % quotes.length]

  return (
    <PageShell
      title="Your dashboard"
      subtitle={`${user?.name}, here is your AI-style prep cockpit: progress, speed, weaknesses, streaks, and the next best thing to revise.`}
      actions={
        <>
          <Link
            to="/subjects"
            className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-[#0f1720]"
          >
            Continue learning
          </Link>
          <Link
            to="/challenge"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink dark:bg-[#172430] dark:text-slate-100"
          >
            Daily challenge
          </Link>
        </>
      }
    >
      <div className="grid gap-5 lg:grid-cols-5">
        <StatCard
          label="Topics Completed"
          value={`${completedCount}/${totalTopics}`}
          helper="Completion drives momentum."
          accent="bg-white dark:bg-[#172430]"
        />
        <StatCard
          label="Accuracy"
          value={`${accuracy}%`}
          helper="Across quizzes, finals, and challenge."
          accent="bg-[#fff4e9] dark:bg-[#2a1f18]"
        />
        {/* <StatCard
          label="Speed Score"
          value={speedScore}
          helper={`${averageTimePerQuestion || "--"} sec per question on average`}
          accent="bg-[#edf4ff] dark:bg-[#142133]"
        /> */}
        <StatCard
          label="Daily Streak"
          value={`${streakDays} days`}
          helper="Any learning action keeps it alive."
          accent="bg-[#eef7f2] dark:bg-[#10281f]"
        />
        <StatCard
          label="Level"
          value={learnerLevel.name}
          helper={`${progress.points} XP collected so far`}
          accent="bg-[#f8f0ff] dark:bg-[#231633]"
        />
        <StatCard
          label="Speed Score"
          value={speedScore}
          helper={`${averageTimePerQuestion || "--"} sec per question on average`}
          accent="bg-[#edf4ff] dark:bg-[#142133]"
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-[#172430]">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">
              Subject-wise progress
            </h2>
            <span className="rounded-full bg-sand px-4 py-2 text-sm font-medium text-moss dark:bg-[#223244] dark:text-emerald-300">
              Overall {completedRatio}%
            </span>
          </div>
          <div className="mt-6 space-y-5">
            {subjects.map((subject) => {
              const summary = subjectCompletion[subject.id];
              const subjectProgress = Math.round(
                (summary.completedCount / summary.totalTopics) * 100,
              );

              return (
                <div
                  key={subject.id}
                  className="rounded-[1.5rem] bg-[#faf6f0] p-5 dark:bg-[#111b25]"
                >
                  <div className="mb-3 flex items-center justify-between text-sm text-slate dark:text-slate-300">
                    <span className="font-semibold text-ink dark:text-white">
                      {subject.name}
                    </span>
                    <span>
                      {summary.completedCount}/{summary.totalTopics} topics
                    </span>
                  </div>
                  <ProgressBar value={subjectProgress} />
                </div>
              );
            })}
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-white to-slate-100 p-6 text-slate-800 shadow-lg border border-slate-200">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Motivation Corner
            </p>

            <p className="mt-4 font-display text-2xl font-semibold leading-snug text-slate-900">
              {welcomeMessage}
            </p>

            <p className="mt-4 text-sm text-slate-600">
              You are performing better than
              <span className="font-semibold text-blue-600">
                {" "}
                {fakeRanking}%{" "}
              </span>
              of users in this simulated cohort.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-[#172430]">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">
                Learning Modules
              </h2>
             
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <Link
                to="/roadmap"
                className="group rounded-2xl bg-[#faf6f0] p-5 transition hover:bg-sand dark:bg-[#111b25] dark:hover:bg-[#223244]"
              >
                <h3 className="font-semibold text-ink dark:text-white">Roadmap</h3>
                <p className="mt-2 text-sm text-slate dark:text-slate-300">
                  Follow structured career paths for developers.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-moss px-3 py-1 text-xs font-medium text-white group-hover:bg-moss/90">
                    View Roadmaps
                  </span>
                </div>
              </Link>
              <Link
                to="/cheatsheet"
                className="group rounded-2xl bg-[#eef7f2] p-5 transition hover:bg-[#d4f0d9] dark:bg-[#10281f] dark:hover:bg-[#1a3a2e]"
              >
                <h3 className="font-semibold text-ink dark:text-white">Cheat Sheet</h3>
                <p className="mt-2 text-sm text-slate dark:text-slate-300">
                  Quick reference guides for key topics.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white group-hover:bg-emerald-700">
                    Browse Topics
                  </span>
                </div>
              </Link>
              <Link
                to="/last-minute"
                className="group rounded-2xl bg-[#edf4ff] p-5 transition hover:bg-[#d1e7ff] dark:bg-[#142133] dark:hover:bg-[#1e2a3d]"
              >
                <h3 className="font-semibold text-ink dark:text-white">Last Minute Prep</h3>
                <p className="mt-2 text-sm text-slate dark:text-slate-300">
                  Essential formulas and tricks for exams.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white group-hover:bg-blue-700">
                    Quick Revision
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-[#172430]">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">
              Weakness Detector
            </h2>
            <Link
              to="/mistakes"
              className="text-sm font-semibold text-moss dark:text-emerald-300"
            >
              Open notebook
            </Link>
          </div>
          <div className="mt-5 space-y-3">
            {weaknessSummary.length ? (
              weaknessSummary.map((item) => (
                <div
                  key={`${item.topicKey}-${item.weaknessLabel}`}
                  className="rounded-2xl bg-[#faf6f0] p-4 dark:bg-[#111b25]"
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
              <div className="rounded-2xl bg-[#faf6f0] p-4 text-sm text-slate dark:bg-[#111b25] dark:text-slate-300">
                Once you make a few mistakes in quizzes, smart weakness hints
                will start showing here.
              </div>
            )}
          </div>
        </section>

        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-[#172430]">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">
              Revision Reminders
            </h2>
            <span className="text-sm text-slate dark:text-slate-300">
              Last studied tracking
            </span>
          </div>
          <div className="mt-5 space-y-3">
            {revisionReminders.length ? (
              revisionReminders.map((item) => (
                <Link
                  key={item.topicKey}
                  to={`/subjects/${item.subjectId}/topics/${item.id}`}
                  className="block rounded-2xl bg-[#faf6f0] p-4 transition hover:bg-sand dark:bg-[#111b25] dark:hover:bg-[#223244]"
                >
                  <p className="font-semibold text-ink dark:text-white">
                    Revise {item.name}
                  </p>
                  <p className="mt-1 text-sm text-slate dark:text-slate-300">
                    Last studied {item.daysAgo} day
                    {item.daysAgo === 1 ? "" : "s"} ago.
                  </p>
                </Link>
              ))
            ) : (
              <div className="rounded-2xl bg-[#faf6f0] p-4 text-sm text-slate dark:bg-[#111b25] dark:text-slate-300">
                No pending revision reminders yet. Keep studying and they will
                show up naturally.
              </div>
            )}
          </div>
        </section>
      </div>
      

      <div className="mt-6 rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-[#172430]">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-semibold text-ink dark:text-white">
            Badges and achievements
          </h2>
          <span className="text-sm text-slate dark:text-slate-300">
            {badges.filter((badge) => badge.unlocked).length}/{badges.length}{" "}
            unlocked
          </span>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`rounded-2xl border px-4 py-4 ${badge.unlocked ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-[#10281f]" : "border-black/5 bg-[#faf6f0] dark:border-white/10 dark:bg-[#111b25]"}`}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate dark:text-slate-400">
                {badge.category}
              </p>
              <p className="mt-2 font-semibold text-ink dark:text-white">
                {badge.name}
              </p>
              <p className="mt-1 text-sm text-slate dark:text-slate-300">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

export default DashboardPage
