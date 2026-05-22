import { motion } from 'framer-motion'
import { FileText, UploadCloud, X } from 'lucide-react'
import { useDropzone } from 'react-dropzone'

const formatFileSize = (bytes = 0) => {
  if (bytes < 1024 * 1024) {
    return `${Math.round(bytes / 1024)} KB`
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

const ResumeUploadPanel = ({
  file,
  isAnalyzing,
  onDrop,
  onRemove,
  onAnalyze,
  onUseDemo,
}) => {
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxFiles: 1,
    noClick: true,
    disabled: isAnalyzing,
  })

  return (
    <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[1.75rem] bg-gradient-to-br from-emerald-200 via-teal-100 to-white p-6 shadow-soft dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:bg-zinc-700 dark:text-emerald-300">
              Smart Review
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink dark:text-white">Upload Your Resume</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate dark:text-white/70">
              Drop a PDF or DOCX resume to check ATS score, keyword match, missing sections, and placement readiness.
            </p>
          </div>
          <div className="rounded-2xl bg-white/75 px-4 py-3 text-sm text-slate shadow-sm dark:bg-zinc-800 dark:text-zinc-200">
            PDF or DOCX
          </div>
        </div>

        <div
          {...getRootProps()}
          className={`mt-6 rounded-[1.5rem] border-2 border-dashed p-6 transition-all ${
            isDragActive
              ? 'border-emerald-400 bg-white/80 dark:bg-zinc-900/70'
              : 'border-white/70 bg-white/60 dark:border-zinc-700 dark:bg-zinc-900/40'
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex min-h-[240px] flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
              <UploadCloud className="h-8 w-8" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink dark:text-white">
              {isDragActive ? 'Drop your resume here' : 'Drag and drop your resume'}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate dark:text-white/65">
              We use rule-based parsing and ATS heuristics, so this stays lightweight and student-friendly.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={open}
                disabled={isAnalyzing}
                className="inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-black"
              >
                Choose Resume
              </button>
              <button
                type="button"
                onClick={onUseDemo}
                disabled={isAnalyzing}
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              >
                Try Demo Resume
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-zinc-900 dark:ring-zinc-800"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Ready Check</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-ink dark:text-white">Resume Intake</h3>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
            ATS Score
          </span>
        </div>

        {file ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-[1.5rem] bg-[#f8fafc] p-5 dark:bg-zinc-800/80"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-md">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-ink dark:text-white">{file.name}</h4>
                  <p className="mt-1 text-sm text-slate dark:text-zinc-400">{formatFileSize(file.size)}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">
                    Ready for analysis
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onRemove}
                disabled={isAnalyzing}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition hover:text-rose-500 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-zinc-900 dark:text-zinc-400"
                aria-label="Remove uploaded file"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="mt-6 rounded-[1.5rem] bg-[#f8fafc] p-6 dark:bg-zinc-800/70">
            <p className="text-sm leading-6 text-slate dark:text-zinc-400">
              No file selected yet. Upload your latest placement resume or use the demo option to preview the experience.
            </p>
          </div>
        )}

        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between text-sm text-slate dark:text-zinc-400">
            <span>Analysis includes</span>
            <span>8 review areas</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-[#e7ddd2] dark:bg-zinc-700">
            <div
              className={`h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-500 transition-all duration-500 ${isAnalyzing ? 'animate-pulse' : ''}`}
              style={{ width: file || isAnalyzing ? '100%' : '34%' }}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={onAnalyze}
          disabled={!file || isAnalyzing}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-black"
        >
          {isAnalyzing ? 'Analyzing Resume...' : 'Analyze Resume'}
        </button>
      </motion.section>
    </div>
  )
}

export default ResumeUploadPanel
