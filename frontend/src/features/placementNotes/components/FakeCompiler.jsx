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
    }, 700)
  }

  const monacoLang = language === 'python' ? 'python' : 'java'

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#1e1e1e] shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#252526] px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-500" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
          <span className="ml-2 text-xs font-medium text-zinc-400">Playground — {monacoLang}</span>
        </div>
        <button
          type="button"
          onClick={handleRun}
          disabled={running}
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:opacity-60"
        >
          <Play className="h-4 w-4" />
          {running ? 'Running...' : 'Run'}
        </button>
      </div>
      <div className="min-h-[220px] border-b border-white/10">
        <Editor
          height="220px"
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
            roundedSelection: true,
          }}
        />
      </div>
      <div className="bg-[#1e1e1e] p-4">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          <Terminal className="h-4 w-4" />
          Terminal
        </div>
        <div className="rounded-lg bg-black/50 p-3 font-mono text-sm text-emerald-400/90">
          {terminalLines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FakeCompiler
