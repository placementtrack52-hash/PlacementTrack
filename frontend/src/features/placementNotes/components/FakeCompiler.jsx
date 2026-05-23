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
    <div className="overflow-hidden rounded-md border border-slate-200 dark:border-zinc-700">
      <div className="flex items-center justify-between border-b border-slate-200 bg-[#f5f7fa] px-3 py-2 dark:border-zinc-700 dark:bg-zinc-950">
        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Playground</span>
        <button
          type="button"
          onClick={handleRun}
          disabled={running}
          className="inline-flex items-center gap-1.5 rounded bg-[#2563eb] px-3 py-1 text-xs font-semibold text-white disabled:opacity-60"
        >
          <Play className="h-3.5 w-3.5" />
          {running ? 'Running...' : 'Run'}
        </button>
      </div>
      <div className="min-h-[180px] border-b border-slate-200 dark:border-zinc-700">
        <Editor
          height="180px"
          language={monacoLang}
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value ?? '')}
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            scrollBeyondLastLine: false,
            lineNumbers: 'on',
          }}
        />
      </div>
      <div className="bg-[#f8fafc] p-3 dark:bg-zinc-950">
        <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <Terminal className="h-3.5 w-3.5" />
          Output
        </div>
        <pre className="rounded bg-zinc-900 p-2 font-mono text-xs text-emerald-400">
          {terminalLines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </pre>
      </div>
    </div>
  )
}

export default FakeCompiler
