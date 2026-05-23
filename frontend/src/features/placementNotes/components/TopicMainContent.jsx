import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowLeft, ArrowRight, Lightbulb } from 'lucide-react'
import DocText from './DocText'
import CodeBlock from './CodeBlock'
import McqSection from './McqSection'
import InterviewSection from './InterviewSection'
import FakeCompiler from './FakeCompiler'

const TopicMainContent = ({ topic, language, languageName, previousTopic, nextTopic }) => {
  if (!topic) {
    return (
      <div className="flex flex-1 items-center justify-center p-8 text-slate-500">
        Topic not found.
      </div>
    )
  }

  const lastUpdated = 'May 2026'

  return (
    <article className="min-w-0 flex-1 bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-10 dark:bg-zinc-900">
      <header className="border-b border-slate-100 pb-6 dark:border-zinc-800">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          <Link to="/placement-notes" className="text-[#2563eb] hover:underline dark:text-blue-400">
            Placement Notes
          </Link>
          <span className="mx-2">/</span>
          <span>{languageName}</span>
        </p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.75rem] dark:text-white">
          {topic.title}
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Last updated: {lastUpdated}
          <span className="mx-2">·</span>
          {topic.readTime}
          <span className="mx-2">·</span>
          {topic.difficulty}
        </p>
        <DocText className="mt-4">{topic.description}</DocText>
        {topic.companyTags?.length ? (
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-800 dark:text-white">Asked in: </span>
            {topic.companyTags.join(', ')}
          </p>
        ) : null}
      </header>

      <div className="py-6">
        {topic.sections?.map((section, i) => (
          <section key={i} className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">{section.heading}</h2>
            <DocText className="mt-3">{section.content}</DocText>
          </section>
        ))}

        {topic.tips?.length ? (
          <div className="mb-8 flex gap-3 rounded border border-[#d4e8d4] bg-[#f6fbf6] p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20">
            <Lightbulb className="h-5 w-5 shrink-0 text-[#2e7d32] dark:text-emerald-400" />
            <ul className="space-y-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {topic.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {topic.warnings?.length ? (
          <div className="mb-8 flex gap-3 rounded border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/40 dark:bg-amber-950/20">
            <AlertTriangle className="h-5 w-5 shrink-0 text-amber-700 dark:text-amber-400" />
            <ul className="space-y-1 text-sm leading-relaxed text-slate-700 dark:text-amber-100/90">
              {topic.warnings.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {topic.codeExamples?.map((ex, i) => (
          <CodeBlock
            key={i}
            title={i === 0 ? `${languageName} Example` : ex.title}
            language={ex.language}
            code={ex.code}
            output={ex.output}
          />
        ))}

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Try it yourself</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Edit and run sample code in the playground (simulated output).
          </p>
          <div className="mt-4">
            <FakeCompiler
              language={language}
              sampleOutput={topic.codeExamples?.[0]?.output ?? 'Done.'}
            />
          </div>
        </section>

        <McqSection mcqs={topic.mcqs} />
        <InterviewSection questions={topic.interviewQuestions} />
      </div>

      <nav className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between dark:border-zinc-800">
        {previousTopic ? (
          <Link
            to={`/placement-notes/${language}/${previousTopic.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2563eb] hover:underline dark:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous: {previousTopic.title}
          </Link>
        ) : (
          <span />
        )}
        {nextTopic ? (
          <Link
            to={`/placement-notes/${language}/${nextTopic.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2563eb] hover:underline sm:ml-auto dark:text-blue-400"
          >
            Next: {nextTopic.title}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            to="/placement-notes"
            className="text-sm font-medium text-slate-600 hover:underline sm:ml-auto dark:text-slate-400"
          >
            Back to languages
          </Link>
        )}
      </nav>
    </article>
  )
}

export default TopicMainContent
