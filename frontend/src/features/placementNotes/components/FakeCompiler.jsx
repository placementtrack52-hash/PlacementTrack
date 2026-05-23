import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Play, Terminal } from 'lucide-react'

const DEFAULT_JAVA = `public class Main {
    public static void main(String[] args) {
        System.out.println("Run to simulate output");
    }
}`

const DEFAULT_PYTHON = `def main():
    print("Run to simulate output")

if __name__ == "__main__":
    main()`

const FakeCompiler = ({ language = 'java', sampleOutput = 'Run to simulate output' }) => {
  const [code, setCode] = useState(language === 'python' ? DEFAULT_PYTHON : DEFAULT_JAVA)
  const [terminalLines, setTerminalLines] = useState(['Ready. Press Run to simulate execution.'])
  const [running, setRunning] = useState(false)

  const handleRun = () => {
    setRunning(true)
    setTerminalLines(['Compiling...', 'Running...'])
    setTimeout(() => {
      setTerminalLines([
        `> ${language === 'python' ? 'python main.py' : 'java Main'}`,
        sampleOutput,
        'Process finished with exit code 0',
      ])
      setRunning(false)
    }, 600)
  }

  const monacoLang = language === 'python' ? 'python' : 'java'

  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-soft dark:border-white/10 dark:bg-zinc-900">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 px-4 py-3 dark:border-white/10">
        <p className="text-sm font-semibold text-ink dark:text-white">Code playground</p>
        <button
          type="button"
          onClick={handleRun}
          disabled={running}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white disabled:opacity-60 dark:bg-white dark:text-[#0f1720]"
        >
          <Play className="h-4 w-4" />
          {running ? 'Running...' : 'Run'}
        </button>
      </div>
      <div className="min-h-[200px] border-b border-black/10 dark:border-white/10">
        <Editor
          height="200px"
          language={monacoLang}
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value ?? '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            padding: { top: 12 },
            scrollBeyondLastLine: false,
            lineNumbers: 'on',
          }}
        />
      </div>
      <div className="bg-[#f8fafc] p-4 dark:bg-zinc-950">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate dark:text-white/50">
          <Terminal className="h-4 w-4" />
          Terminal (simulated)
        </div>
        <div className="rounded-[1rem] bg-zinc-900 p-3 font-mono text-sm text-emerald-400/90">
          {terminalLines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FakeCompiler
