import { motion } from 'framer-motion'
import { AlertTriangle, BadgeCheck, CheckCircle2, Link2, Sparkles, Target } from 'lucide-react'
import ScoreRing from './ScoreRing'

const toneClasses = {
  amber: 'from-amber-200 via-orange-100 to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800',
  sky: 'from-sky-200 via-cyan-100 to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800',
  emerald: 'from-emerald-200 via-teal-100 to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800',
  violet: 'from-violet-200 via-purple-100 to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800',
}

const statusClasses = {
  pass: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
  warn: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
  fail: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300',
}

const labelTone = (score) => {
  if (score >= 85) return 'emerald'
  if (score >= 70) return 'sky'
  if (score >= 55) return 'amber'
  return 'violet'
}

const ResumeInsightsDashboard = ({ analysis }) => {
  const tone = labelTone(analysis.score)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <section className={`rounded-[1.75rem] bg-gradient-to-br p-6 shadow-soft ${toneClasses[tone]}`}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-zinc-800 dark:text-zinc-300">
                Placement Focus
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink dark:text-white">{analysis.strengthLabel}</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate dark:text-white/70">
                {analysis.placementReadiness.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-ink dark:bg-zinc-800 dark:text-white">
                  {analysis.placementReadiness.label}
                </span>
                <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-ink dark:bg-zinc-800 dark:text-white">
                  {analysis.keywordAnalysis.matchPercent}% keyword match
                </span>
              </div>
            </div>
            <ScoreRing value={analysis.score} tone={tone} />
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.75rem] bg-white p-5 shadow-soft ring-1 ring-slate-200/70 dark:bg-zinc-900 dark:ring-zinc-800">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate dark:text-zinc-400">Resume Strength</p>
                <h3 className="text-lg font-semibold text-ink dark:text-white">{analysis.keywordAnalysis.strength}</h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate dark:text-zinc-400">
              Based on section coverage, technical keywords, ATS formatting signals, and quality heuristics.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-white p-5 shadow-soft ring-1 ring-slate-200/70 dark:bg-zinc-900 dark:ring-zinc-800">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate dark:text-zinc-400">Resume Breakdown</p>
                <h3 className="text-lg font-semibold text-ink dark:text-white">{analysis.metrics.wordCount} words</h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate dark:text-zinc-400">
              Approx. {analysis.metrics.pageEstimate || 0.1} pages, {analysis.metrics.bulletCount} bullet points, and {analysis.metrics.actionVerbCount} action verbs detected.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-white p-5 shadow-soft ring-1 ring-slate-200/70 dark:bg-zinc-900 dark:ring-zinc-800">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate dark:text-zinc-400">Missing Sections</p>
                <h3 className="text-lg font-semibold text-ink dark:text-white">{analysis.missingSections.length}</h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate dark:text-zinc-400">
              {analysis.missingSections.length > 0 ? analysis.missingSections.join(', ') : 'No major resume sections are missing.'}
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-white p-5 shadow-soft ring-1 ring-slate-200/70 dark:bg-zinc-900 dark:ring-zinc-800">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                <Link2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate dark:text-zinc-400">Professional Links</p>
                <h3 className="text-lg font-semibold text-ink dark:text-white">{analysis.extracted.links.length}</h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate dark:text-zinc-400">
              GitHub and LinkedIn links are especially valuable for placement and internship shortlisting.
            </p>
          </div>
        </section>
      </div>

      <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {analysis.breakdown.map((item) => {
          const percent = Math.round((item.score / item.maxScore) * 100)

          return (
            <div
              key={item.label}
              className={`rounded-[1.75rem] bg-gradient-to-br p-5 shadow-soft ${toneClasses[item.tone] ?? toneClasses.sky}`}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-400">{item.label}</p>
              <h3 className="mt-3 text-3xl font-bold text-ink dark:text-white">
                {item.score}
                <span className="text-lg text-slate-500 dark:text-zinc-400">/{item.maxScore}</span>
              </h3>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/70 dark:bg-zinc-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-ink to-slate transition-all duration-700 dark:from-white dark:to-zinc-300"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          )
        })}
      </section>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-zinc-900 dark:ring-zinc-800">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-400">Keyword Analysis</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink dark:text-white">Match & Gaps</h3>
            </div>
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
              {analysis.keywordAnalysis.matchPercent}% match
            </span>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-ink dark:text-white">Detected Keywords</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {analysis.keywordAnalysis.detected.length > 0 ? (
                  analysis.keywordAnalysis.detected.map((entry) => (
                    <span
                      key={entry.keyword}
                      className="rounded-full bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
                    >
                      {entry.keyword} {entry.count > 1 ? `(${entry.count})` : '✓'}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-slate dark:text-zinc-400">No tracked technical keywords were detected yet.</p>
                )}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-ink dark:text-white">Missing Priority Keywords</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {analysis.keywordAnalysis.missing.length > 0 ? (
                  analysis.keywordAnalysis.missing.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700 dark:bg-rose-500/10 dark:text-rose-300"
                    >
                      {keyword}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-slate dark:text-zinc-400">Priority placement keywords are well covered.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-zinc-900 dark:ring-zinc-800">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-400">Improvement Suggestions</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink dark:text-white">Next Best Fixes</h3>
            </div>
            <Sparkles className="h-5 w-5 text-amber-500" />
          </div>

          <div className="mt-6 space-y-3">
            {analysis.suggestions.map((suggestion) => (
              <div
                key={suggestion}
                className="rounded-2xl bg-[#f8fafc] px-4 py-4 text-sm leading-6 text-slate dark:bg-zinc-800 dark:text-zinc-300"
              >
                {suggestion}
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-zinc-900 dark:ring-zinc-800">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-400">Section Review</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-ink dark:text-white">Required Sections</h3>
          <div className="mt-5 space-y-3">
            {analysis.sectionChecks.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-2xl bg-[#f8fafc] px-4 py-3 dark:bg-zinc-800">
                <span className="text-sm font-medium text-ink dark:text-white">{item.label}</span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.present ? statusClasses.pass : statusClasses.fail}`}>
                  {item.present ? 'Present' : 'Missing'}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-zinc-900 dark:ring-zinc-800">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-400">ATS Compatibility</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-ink dark:text-white">Formatting Signals</h3>
          <div className="mt-5 space-y-3">
            {analysis.atsChecks.map((item) => (
              <div key={item.id} className="rounded-2xl bg-[#f8fafc] p-4 dark:bg-zinc-800">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-ink dark:text-white">{item.label}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[item.status]}`}>
                    {item.status === 'pass' ? 'Good' : item.status === 'warn' ? 'Attention' : 'Fix'}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate dark:text-zinc-400">{item.message}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-zinc-900 dark:ring-zinc-800">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-400">Resume Quality</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-ink dark:text-white">Content Quality</h3>
          <div className="mt-5 space-y-3">
            {analysis.qualityChecks.map((item) => (
              <div key={item.id} className="rounded-2xl bg-[#f8fafc] p-4 dark:bg-zinc-800">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-ink dark:text-white">{item.label}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[item.status]}`}>
                    {item.status === 'pass' ? 'Strong' : item.status === 'warn' ? 'Improve' : 'Weak'}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate dark:text-zinc-400">{item.message}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-zinc-900 dark:ring-zinc-800">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-400">Extracted Snapshot</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-ink dark:text-white">Resume Breakdown</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#f8fafc] p-4 dark:bg-zinc-800">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">Candidate</p>
              <p className="mt-2 text-sm font-semibold text-ink dark:text-white">{analysis.extracted.name || 'Not detected'}</p>
            </div>
            <div className="rounded-2xl bg-[#f8fafc] p-4 dark:bg-zinc-800">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">Contact</p>
              <p className="mt-2 text-sm font-semibold text-ink dark:text-white">{analysis.extracted.email || 'Email missing'}</p>
              <p className="mt-1 text-sm text-slate dark:text-zinc-400">{analysis.extracted.phone || 'Phone missing'}</p>
            </div>
            <div className="rounded-2xl bg-[#f8fafc] p-4 dark:bg-zinc-800 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">Detected Skills</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {analysis.extracted.skills.length > 0 ? analysis.extracted.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-ink shadow-sm dark:bg-zinc-900 dark:text-white"
                  >
                    {skill}
                  </span>
                )) : (
                  <p className="text-sm text-slate dark:text-zinc-400">No skills detected.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-zinc-900 dark:ring-zinc-800">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-400">Resume Tips</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-ink dark:text-white">Placement-friendly Advice</h3>
          <div className="mt-5 space-y-3">
            {analysis.tips.map((tip) => (
              <div key={tip} className="flex items-start gap-3 rounded-2xl bg-[#f8fafc] p-4 dark:bg-zinc-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                <p className="text-sm leading-6 text-slate dark:text-zinc-300">{tip}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default ResumeInsightsDashboard
