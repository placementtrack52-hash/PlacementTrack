import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowLeft, ArrowRight, Lightbulb, Menu, Tag } from 'lucide-react'
import CodeBlock from './CodeBlock'
import McqSection from './McqSection'
import InterviewSection from './InterviewSection'
import FakeCompiler from './FakeCompiler'

const TopicMainContent = ({
  topic,
  language,
  previousTopic,
  nextTopic,
  onOpenSidebar,
  sampleOutput,
}) => {
  if (!topic) {
    return (
      <div className="flex flex-1 items-center justify-center p-8 text-zinc-400">
        Topic not found.
      </div>
    )
  }

  return (
    <main className="min-w-0 flex-1 overflow-y-auto">
      <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-white/10 bg-zinc-950/90 px-4 py-3 backdrop-blur-md lg:hidden">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="rounded-lg border border-white/10 p-2 text-zinc-300 hover:bg-white/5"
          aria-label="Open topics"
        >
          <Menu className="h-5 w-5" />
        </button>
        <span className="truncate text-sm font-medium text-white">{topic.title}</span>
      </div>

      <div className="relative h-40 overflow-hidden sm:h-52 md:h-64">
        <img
          src={topic.image}
          alt=""
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-violet-500/30 px-3 py-1 text-xs font-semibold text-violet-200">
              {topic.difficulty}
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300">
              {topic.readTime}
            </span>
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold text-white md:text-4xl">{topic.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-300 md:text-base">{topic.description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-8 p-4 md:p-8">
        {topic.companyTags?.length ? (
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-zinc-500" />
            {topic.companyTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-zinc-900/80 px-3 py-1 text-xs text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {topic.sections?.map((section, i) => (
          <article
            key={i}
            className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-sm"
          >
            <h2 className="font-display text-xl font-bold text-white">{section.heading}</h2>
            <p className="mt-3 leading-relaxed text-zinc-300">{section.content}</p>
          </article>
        ))}

        {topic.tips?.length ? (
          <div className="flex gap-3 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
            <Lightbulb className="h-5 w-5 shrink-0 text-amber-400" />
            <ul className="space-y-1 text-sm text-amber-100/90">
              {topic.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {topic.warnings?.length ? (
          <div className="flex gap-3 rounded-xl border border-rose-500/20 bg-rose-500/10 p-4">
            <AlertTriangle className="h-5 w-5 shrink-0 text-rose-400" />
            <ul className="space-y-1 text-sm text-rose-100/90">
              {topic.warnings.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {topic.codeExamples?.length ? (
          <section>
            <h3 className="mb-4 font-display text-xl font-bold text-white">Code Examples</h3>
            <div className="space-y-4">
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

        <nav className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
          {previousTopic ? (
            <Link
              to={`/placement-notes/${language}/${previousTopic.slug}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-violet-500/40 hover:text-white"
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
              className="inline-flex items-center justify-end gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:ml-auto"
            >
              {nextTopic.title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link
              to="/placement-notes"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-zinc-300 hover:text-white sm:ml-auto"
            >
              Finish track
            </Link>
          )}
        </nav>
      </div>
    </main>
  )
}

export default TopicMainContent
