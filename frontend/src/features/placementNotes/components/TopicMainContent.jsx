import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowLeft, ArrowRight, Lightbulb, Tag } from 'lucide-react'
import CodeBlock from './CodeBlock'
import McqSection from './McqSection'
import InterviewSection from './InterviewSection'
import FakeCompiler from './FakeCompiler'

const TopicMainContent = ({ topic, language, previousTopic, nextTopic }) => {
  if (!topic) {
    return (
      <p className="rounded-[1.75rem] bg-white p-6 text-slate shadow-soft dark:bg-zinc-900 dark:text-white/70">
        Topic not found.
      </p>
    )
  }

  return (
    <div className="min-w-0 space-y-6">
      <section className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-[#eef7f2] px-3 py-1 text-xs font-semibold text-moss dark:bg-emerald-950 dark:text-emerald-300">
            {topic.difficulty}
          </span>
          <span className="rounded-full border border-black/10 px-3 py-1 text-xs text-slate dark:border-white/10 dark:text-white/70">
            {topic.readTime}
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate dark:text-white/80">{topic.description}</p>
        {topic.companyTags?.length ? (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-slate dark:text-white/50" />
            {topic.companyTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/10 px-3 py-1 text-xs text-slate dark:border-white/10 dark:text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </section>

      {topic.sections?.map((section, i) => (
        <article
          key={i}
          className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900"
        >
          <h2 className="font-display text-xl font-semibold text-ink dark:text-white">{section.heading}</h2>
          <p className="mt-3 leading-relaxed text-slate dark:text-white/80">{section.content}</p>
        </article>
      ))}

      {topic.tips?.length ? (
        <div className="flex gap-3 rounded-[1.5rem] border border-[#f1e6d8] bg-[#fff8ef] p-4 dark:border-amber-500/20 dark:bg-amber-950/20">
          <Lightbulb className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <ul className="space-y-1 text-sm text-slate dark:text-amber-100/90">
            {topic.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {topic.warnings?.length ? (
        <div className="flex gap-3 rounded-[1.5rem] border border-rose-200 bg-rose-50 p-4 dark:border-rose-500/20 dark:bg-rose-950/20">
          <AlertTriangle className="h-5 w-5 shrink-0 text-rose-600 dark:text-rose-400" />
          <ul className="space-y-1 text-sm text-slate dark:text-rose-100/90">
            {topic.warnings.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {topic.codeExamples?.length ? (
        <section className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900">
          <h3 className="font-display text-xl font-semibold text-ink dark:text-white">Code examples</h3>
          <div className="mt-4 space-y-4">
            {topic.codeExamples.map((ex, i) => (
              <CodeBlock
                key={i}
                title={ex.title}
                language={ex.language}
                code={ex.code}
                output={ex.output}
              />
            ))}
          </div>
        </section>
      ) : null}

      <FakeCompiler
        language={language}
        sampleOutput={topic.codeExamples?.[0]?.output ?? 'Done.'}
      />

      <McqSection mcqs={topic.mcqs} />
      <InterviewSection questions={topic.interviewQuestions} />

      <nav className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        {previousTopic ? (
          <Link
            to={`/placement-notes/${language}/${previousTopic.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-ink dark:border-white/10 dark:bg-zinc-900 dark:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {previousTopic.title}
          </Link>
        ) : (
          <span />
        )}
        {nextTopic ? (
          <Link
            to={`/placement-notes/${language}/${nextTopic.slug}`}
            className="inline-flex items-center justify-end gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white sm:ml-auto dark:bg-white dark:text-[#0f1720]"
          >
            {nextTopic.title}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            to="/placement-notes"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-3 text-sm text-slate sm:ml-auto dark:border-white/10 dark:bg-zinc-900 dark:text-white/80"
          >
            Back to languages
          </Link>
        )}
      </nav>
    </div>
  )
}

export default TopicMainContent
