import { Link } from 'react-router-dom'
import PageShell from '../../components/PageShell'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { companyCards, type CompanyName } from './companyData'
import { selectCompanySectionProgress, setSelectedCompany } from './companyPrepSlice'

const CompanyList = () => {
  const dispatch = useAppDispatch()
  const companyProgressMap = useAppSelector((state) =>
    companyCards.reduce((acc, company) => {
      acc[company.name] = selectCompanySectionProgress(state, company.name)
      return acc
    }, {} as Record<CompanyName, ReturnType<typeof selectCompanySectionProgress>>),
  )

  return (
    <PageShell
      title="Company Wise Preparation"
      subtitle="Practice placement-style rounds company by company. Pick a target and train across aptitude, reasoning, verbal, and technical sections with interview-ready feedback."
      actions={undefined}
    >
      <div className="mb-8 rounded-[2.25rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(236,242,250,0.9)_55%,_rgba(228,236,246,0.88))] p-6 text-ink shadow-[0_24px_70px_rgba(148,163,184,0.22)] backdrop-blur dark:border-white/10 dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900 dark:text-white sm:p-8">
        <p className="text-sm uppercase tracking-[0.45em] text-slate-500 dark:text-emerald-400">Placement Sprint</p>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-[#1e293b] dark:text-white sm:text-4xl">
              Prepare the way recruiters actually test
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-white/70 sm:text-base">
              Each company track includes aptitude, reasoning, verbal, and technical practice with explanations, progress tracking, retry support, and a focused one-question-at-a-time flow.
            </p>
          </div>
          <div className="rounded-full bg-white/85 px-5 py-4 text-sm font-semibold text-[#0f766e] shadow-[0_10px_30px_rgba(255,255,255,0.55)] dark:bg-emerald-500 dark:text-white dark:shadow-none">
            20 company tracks | 4 sections each
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {companyCards.map((company) => (
          (() => {
            const progress = companyProgressMap[company.name]

            return (
              <Link
                key={company.name}
                to={`/company-prep/${company.name}`}
                onClick={() => dispatch(setSelectedCompany(company.name))}
                className="group flex min-h-[320px] flex-col justify-between rounded-[2.15rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.98),_rgba(241,245,249,0.94)_52%,_rgba(229,236,245,0.92))] p-7 shadow-[0_24px_70px_rgba(148,163,184,0.22)] transition duration-300 hover:scale-[1.025] hover:shadow-[0_30px_80px_rgba(148,163,184,0.3)] dark:border-white/10 dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900 dark:text-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.45em] text-slate-500 dark:text-emerald-400">{company.icon}</p>
                    <h3 className="mt-5 font-display text-[2rem] font-bold leading-none text-[#1e293b] dark:text-white">
                      {company.name}
                    </h3>
                    <p className="mt-5 max-w-[16rem] text-base leading-8 text-slate-600 dark:text-white/70">{company.tagline}</p>
                  </div>
                  <div className="rounded-full bg-white/90 px-5 py-3 text-right shadow-[0_12px_30px_rgba(255,255,255,0.6)] dark:bg-white/10 dark:shadow-none">
                    <p className="text-2xl font-bold leading-none text-[#0f766e] dark:text-emerald-400">
                      {progress.completedCount}/{progress.totalCount}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-none text-[#0f766e] dark:text-emerald-400">done</p>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-3 flex items-center justify-between text-[1rem] text-slate-600 dark:text-white">
                    <span>Progress</span>
                    <span>{progress.progressPercent}%</span>
                  </div>
                  <div className="h-3.5 overflow-hidden rounded-full bg-[#ddd4c8] dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400 transition-all duration-500"
                      style={{ width: `${progress.progressPercent}%` }}
                    />
                  </div>
                  <span className="mt-8 inline-flex w-fit rounded-full bg-emerald-500 px-7 py-4 text-base font-semibold text-white transition group-hover:bg-emerald-400 dark:bg-emerald-500 dark:text-white dark:group-hover:bg-emerald-400">
                    Open subject
                  </span>
                </div>
              </Link>
            )
          })()
        ))}
      </div>
    </PageShell>
  )
}

export default CompanyList
