import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Brain, Keyboard, Calculator } from 'lucide-react'

// ─── 1. BUG HUNTER ───────────────────────────────────────────────────────────
const snippets = [
  { code: 'for(let i=0; i<10; i++)', isBug: false },
  { code: 'for(let i=0; i<10; i--)', isBug: true },
  { code: 'const x = 5;', isBug: false },
  { code: '2 + 2 = 5', isBug: true },
  { code: 'SELECT * FROM users;', isBug: false },
  { code: 'if(x = 10)', isBug: true },
  { code: 'arr.length === 0', isBug: false },
  { code: 'while(true) { break }', isBug: false },
  { code: 'return x == null ?? x', isBug: true },
  { code: 'console.log("hello")', isBug: false },
  { code: 'arr.pust(5)', isBug: true },
  { code: 'Math.floor(3.9)', isBug: false },
  { code: 'str.toUperCase()', isBug: true },
  { code: 'Object.keys(obj)', isBug: false },
  { code: 'null.toString()', isBug: true },
]

function BugHunterGame() {
  const [phase, setPhase] = useState('idle')
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(5)
  const [feedback, setFeedback] = useState(null)
  const [hi, setHi] = useState(() => Number(localStorage.getItem('bh_hi') || 0))
  const shuffled = useRef([...snippets].sort(() => Math.random() - 0.5))

  useEffect(() => {
    if (phase !== 'playing') return
    if (timeLeft <= 0) { endGame(); return }
    const t = setTimeout(() => setTimeLeft(p => p - 1), 1000)
    return () => clearTimeout(t)
  }, [phase, timeLeft])

  const endGame = useCallback(() => {
    setPhase('done')
    if (score > hi) { setHi(score); localStorage.setItem('bh_hi', score) }
  }, [score, hi])

  const answer = (guessIsBug) => {
    if (phase !== 'playing') return
    const correct = guessIsBug === shuffled.current[idx].isBug
    setFeedback(correct ? 'correct' : 'wrong')
    setTimeout(() => {
      setFeedback(null)
      if (!correct) { endGame(); return }
      setScore(s => s + 1)
      const next = idx + 1
      if (next >= shuffled.current.length) { endGame(); return }
      setIdx(next); setTimeLeft(5)
    }, 600)
  }

  const restart = () => {
    shuffled.current = [...snippets].sort(() => Math.random() - 0.5)
    setIdx(0); setScore(0); setTimeLeft(5); setFeedback(null); setPhase('playing')
  }

  if (phase === 'idle') return (
    <div className="flex flex-col items-center justify-center h-full gap-4 py-6">
      <Zap className="h-10 w-10 text-rose-500" />
      <p className="text-center text-sm text-slate-500 dark:text-slate-400 max-w-[180px]">Spot the bug before time runs out!</p>
      <button onClick={() => setPhase('playing')} className="rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-6 py-2 text-sm font-semibold text-white shadow hover:opacity-90">Start Game</button>
      {hi > 0 && <p className="text-xs text-slate-400">Best: {hi}</p>}
    </div>
  )

  if (phase === 'done') return (
    <div className="flex flex-col items-center justify-center h-full gap-3 py-6">
      <p className="text-3xl font-bold text-ink dark:text-white">{score}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400">bugs caught</p>
      {score >= hi && score > 0 && <span className="text-xs font-semibold text-amber-500">🏆 New High Score!</span>}
      <button onClick={restart} className="rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-6 py-2 text-sm font-semibold text-white shadow hover:opacity-90 mt-2">Play Again</button>
    </div>
  )

  const pct = (timeLeft / 5) * 100
  return (
    <div className="flex flex-col gap-3 py-2">
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>Score: <b className="text-ink dark:text-white">{score}</b></span>
        <span className={timeLeft <= 2 ? 'text-rose-500 font-bold' : ''}>{timeLeft}s</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-white/10">
        <motion.div className="h-1.5 rounded-full bg-gradient-to-r from-rose-500 to-orange-400" style={{ width: `${pct}%` }} />
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className={`rounded-xl p-3 font-mono text-sm bg-slate-900 text-green-400 border-2 transition-colors ${feedback === 'correct' ? 'border-emerald-500' : feedback === 'wrong' ? 'border-rose-500' : 'border-transparent'}`}>
          {shuffled.current[idx]?.code}
        </motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-2 gap-2">
        <button onClick={() => answer(false)} className="rounded-xl border border-emerald-300 bg-emerald-50 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">✅ Clean</button>
        <button onClick={() => answer(true)} className="rounded-xl border border-rose-300 bg-rose-50 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-100 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300">🐛 Bug!</button>
      </div>
    </div>
  )
}

// ─── 2. MEMORY MATCH ─────────────────────────────────────────────────────────
const pairs = [
  ['Merge Sort', 'O(n log n)'],
  ['Binary Search', 'O(log n)'],
  ['SQL', 'Relational DB'],
  ['React', 'Virtual DOM'],
  ['DNS', 'Domain→IP'],
  ['REST', 'Stateless API'],
]

function buildCards() {
  const arr = pairs.flatMap(([a, b], i) => [
    { id: `${i}a`, group: i, text: a },
    { id: `${i}b`, group: i, text: b },
  ]);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function MemoryMatch() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState(new Set())
  const [moves, setMoves] = useState(0)
  const [phase, setPhase] = useState('idle')
  const [checking, setChecking] = useState(false)

  const start = () => { setCards(buildCards()); setFlipped([]); setMatched(new Set()); setMoves(0); setPhase('playing') }

  const flip = (id) => {
    if (checking || flipped.includes(id) || matched.has(id)) return
    const next = [...flipped, id]
    setFlipped(next)
    if (next.length === 2) {
      setChecking(true); setMoves(m => m + 1)
      const [a, b] = next.map(fid => cards.find(c => c.id === fid))
      setTimeout(() => {
        if (a.group === b.group) {
          const nm = new Set(matched); nm.add(a.id); nm.add(b.id)
          setMatched(nm)
          if (nm.size === cards.length) setPhase('done')
        }
        setFlipped([]); setChecking(false)
      }, 600)
    }
  }

  if (phase === 'idle') return (
    <div className="flex flex-col items-center justify-center h-full gap-4 py-6">
      <Brain className="h-10 w-10 text-indigo-500" />
      <p className="text-center text-sm text-slate-500 dark:text-slate-400 max-w-[180px]">Match tech concepts with their answers!</p>
      <button onClick={start} className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-2 text-sm font-semibold text-white shadow hover:opacity-90">Play Now</button>
    </div>
  )
  if (phase === 'done') return (
    <div className="flex flex-col items-center justify-center h-full gap-3 py-6">
      <p className="text-3xl font-bold text-ink dark:text-white">{moves}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400">moves to win 🎉</p>
      <button onClick={start} className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-2 text-sm font-semibold text-white shadow mt-2">Play Again</button>
    </div>
  )

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-right text-slate-400">Moves: <b className="text-ink dark:text-white">{moves}</b></p>
      <div className="grid grid-cols-3 gap-2">
        {cards.map(card => {
          const isFlipped = flipped.includes(card.id) || matched.has(card.id)
          const isMatched = matched.has(card.id)
          return (
            <button key={card.id} onClick={() => flip(card.id)}
              className={`flex items-center justify-center min-h-[4rem] p-1 text-center leading-tight rounded-lg text-xs font-semibold transition-all duration-300 shadow-sm ${
                isMatched ? 'bg-emerald-100 text-emerald-700 border border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30'
                : isFlipped ? 'bg-white text-slate-800 border border-indigo-300 dark:bg-zinc-800 dark:text-white dark:border-indigo-500/50'
                : 'bg-gradient-to-br from-indigo-500 to-violet-600 text-indigo-200/50 hover:from-indigo-400 hover:to-violet-500 cursor-pointer shadow-md'
              }`}>
              {isFlipped ? card.text : '?'}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── 3. CODE TYPING TEST ──────────────────────────────────────────────────────
const codeSnippets = [
  'function binarySearch(arr, t) {\n  let l=0, r=arr.length-1;\n  while(l<=r) {\n    let m=Math.floor((l+r)/2);\n    if(arr[m]===t) return m;\n    if(arr[m]<t) l=m+1; else r=m-1;\n  }\n  return -1;\n}',
  'SELECT u.name, COUNT(o.id)\nFROM users u\nJOIN orders o ON u.id=o.user_id\nGROUP BY u.name\nHAVING COUNT(o.id) > 5;',
  'function bubbleSort(arr) {\n  for(let i=0;i<arr.length;i++)\n    for(let j=0;j<arr.length-i-1;j++)\n      if(arr[j]>arr[j+1])\n        [arr[j],arr[j+1]]=[arr[j+1],arr[j]];\n  return arr;\n}',
]

function TypingGame() {
  const [phase, setPhase] = useState('idle')
  const [snippetIdx, setSnippetIdx] = useState(0)
  const [typed, setTyped] = useState('')
  const [wpm, setWpm] = useState(0)
  const [acc, setAcc] = useState(0)
  const [start, setStart] = useState(null)
  const taRef = useRef(null)
  const target = codeSnippets[snippetIdx]

  const handleChange = (e) => {
    const val = e.target.value
    if (!start) setStart(Date.now())
    setTyped(val)
    if (val === target) {
      const mins = (Date.now() - start) / 60000
      const w = Math.round(target.split(/\s+/).length / mins)
      const correct = [...val].filter((c, i) => c === target[i]).length
      setWpm(w); setAcc(Math.round((correct / target.length) * 100))
      setPhase('done')
    }
  }

  const restart = () => { setTyped(''); setStart(null); setPhase('playing'); setSnippetIdx(i => (i + 1) % codeSnippets.length); setTimeout(() => taRef.current?.focus(), 50) }

  if (phase === 'idle') return (
    <div className="flex flex-col items-center justify-center h-full gap-4 py-6">
      <Keyboard className="h-10 w-10 text-sky-500" />
      <p className="text-center text-sm text-slate-500 dark:text-slate-400 max-w-[180px]">Type out real algorithms at full speed!</p>
      <button onClick={() => { setPhase('playing'); setTimeout(() => taRef.current?.focus(), 50) }} className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-2 text-sm font-semibold text-white shadow hover:opacity-90">Start Typing</button>
    </div>
  )
  if (phase === 'done') return (
    <div className="flex flex-col items-center justify-center h-full gap-2 py-6">
      <p className="text-3xl font-bold text-ink dark:text-white">{wpm} <span className="text-base font-normal text-slate-400">WPM</span></p>
      <p className="text-sm text-slate-500 dark:text-slate-400">Accuracy: {acc}%</p>
      <button onClick={restart} className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-2 text-sm font-semibold text-white shadow mt-2">Next Snippet</button>
    </div>
  )

  return (
    <div className="flex flex-col gap-2">
      <pre className="rounded-lg bg-slate-900 p-2 text-[10px] leading-5 text-slate-300 overflow-auto max-h-[90px] whitespace-pre-wrap">
        {[...target].map((ch, i) => {
          let cls = 'text-slate-500'
          if (i < typed.length) cls = typed[i] === ch ? 'text-emerald-400' : 'text-rose-400 bg-rose-900/40'
          if (i === typed.length) cls = 'bg-white/20 text-white'
          return <span key={i} className={cls}>{ch}</span>
        })}
      </pre>
      <textarea ref={taRef} value={typed} onChange={handleChange} rows={3}
        className="w-full rounded-lg border border-slate-200 bg-white p-2 font-mono text-xs text-slate-800 outline-none resize-none dark:border-white/10 dark:bg-zinc-800 dark:text-white"
        placeholder="Start typing here..." spellCheck={false} />
      <p className="text-[10px] text-slate-400">{typed.length}/{target.length} chars</p>
    </div>
  )
}

// ─── 4. MATH RUSH ─────────────────────────────────────────────────────────────
function generateQ() {
  const ops = ['+', '-', '*']
  const op = ops[Math.floor(Math.random() * ops.length)]
  let a, b, ans
  if (op === '+') { a = Math.floor(Math.random() * 50) + 10; b = Math.floor(Math.random() * 50) + 10; ans = a + b }
  else if (op === '-') { a = Math.floor(Math.random() * 50) + 30; b = Math.floor(Math.random() * 30) + 5; ans = a - b }
  else { a = Math.floor(Math.random() * 12) + 2; b = Math.floor(Math.random() * 12) + 2; ans = a * b }
  const opts = new Set([ans])
  while (opts.size < 4) opts.add(ans + Math.floor(Math.random() * 20) - 10 || ans + 1)
  return { q: `${a} ${op} ${b}`, ans, opts: [...opts].sort(() => Math.random() - 0.5) }
}

function MathRush() {
  const [phase, setPhase] = useState('idle')
  const [q, setQ] = useState(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [feedback, setFeedback] = useState(null)
  const [hi, setHi] = useState(() => Number(localStorage.getItem('mr_hi') || 0))

  useEffect(() => {
    if (phase !== 'playing') return
    if (timeLeft <= 0) {
      setPhase('done')
      if (score > hi) { setHi(score); localStorage.setItem('mr_hi', score) }
      return
    }
    const t = setTimeout(() => setTimeLeft(p => p - 1), 1000)
    return () => clearTimeout(t)
  }, [phase, timeLeft, score, hi])

  const start = () => { setScore(0); setTimeLeft(60); setFeedback(null); setQ(generateQ()); setPhase('playing') }

  const pick = (opt) => {
    if (feedback) return
    const correct = opt === q.ans
    setFeedback(correct ? 'correct' : 'wrong')
    if (correct) setScore(s => s + 1)
    setTimeout(() => { setFeedback(null); setQ(generateQ()) }, 400)
  }

  if (phase === 'idle') return (
    <div className="flex flex-col items-center justify-center h-full gap-4 py-6">
      <Calculator className="h-10 w-10 text-amber-500" />
      <p className="text-center text-sm text-slate-500 dark:text-slate-400 max-w-[180px]">Solve as many sums as you can in 60 seconds!</p>
      <button onClick={start} className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-2 text-sm font-semibold text-white shadow hover:opacity-90">Start Rush</button>
      {hi > 0 && <p className="text-xs text-slate-400">Best: {hi}</p>}
    </div>
  )
  if (phase === 'done') return (
    <div className="flex flex-col items-center justify-center h-full gap-3 py-6">
      <p className="text-3xl font-bold text-ink dark:text-white">{score}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400">correct answers</p>
      {score >= hi && score > 0 && <span className="text-xs font-semibold text-amber-500">🏆 New High Score!</span>}
      <button onClick={start} className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-2 text-sm font-semibold text-white shadow mt-2">Play Again</button>
    </div>
  )

  const pct = (timeLeft / 60) * 100
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>Score: <b className="text-ink dark:text-white">{score}</b></span>
        <span className={timeLeft <= 10 ? 'text-rose-500 font-bold' : ''}>{timeLeft}s</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-white/10">
        <motion.div className="h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400" style={{ width: `${pct}%` }} />
      </div>
      <AnimatePresence mode="wait">
        <motion.p key={q?.q} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className={`text-center text-3xl font-bold py-2 transition-colors ${feedback === 'correct' ? 'text-emerald-500' : feedback === 'wrong' ? 'text-rose-500' : 'text-ink dark:text-white'}`}>
          {q?.q} = ?
        </motion.p>
      </AnimatePresence>
      <div className="grid grid-cols-2 gap-2">
        {q?.opts.map(opt => (
          <button key={opt} onClick={() => pick(opt)}
            className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-sm font-semibold text-slate-800 hover:border-amber-400 hover:bg-amber-50 dark:border-white/10 dark:bg-zinc-800 dark:text-white dark:hover:bg-amber-500/20">
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────────
const games = [
  { id: 'bug',    label: 'Bug Hunter',    icon: Zap,        color: 'from-rose-500 to-orange-500',    light: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-500/20',    component: BugHunterGame },
  { id: 'memory', label: 'Memory Match',  icon: Brain,      color: 'from-indigo-500 to-violet-500',  light: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20', component: MemoryMatch },
  { id: 'type',   label: 'Typing Test',   icon: Keyboard,   color: 'from-sky-500 to-cyan-500',       light: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-500/20',       component: TypingGame },
  { id: 'math',   label: '60s Math Rush', icon: Calculator, color: 'from-amber-500 to-yellow-500',   light: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20', component: MathRush },
]

export default function MiniGamesSection() {
  return (
    <div className="mt-3 rounded-2xl bg-white p-4 shadow-md dark:border dark:border-slate-700/60 dark:bg-[#0f1b2d]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-300">Brain Break</p>
          <h2 className="mt-1 font-display text-lg font-semibold text-ink dark:text-white">Mini Games</h2>
        </div>
        <span className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-3 py-1 text-xs font-medium text-white shadow">Refresh your mind</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {games.map(({ id, label, icon: Icon, color, light, component: Game }) => (
          <div key={id} className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/60 dark:border-white/10 dark:bg-zinc-800/60 overflow-hidden">
            <div className={`flex items-center gap-2 border-b px-4 py-3 ${light}`}>
              <Icon className="h-4 w-4" />
              <span className="text-xs font-semibold">{label}</span>
            </div>
            <div className="flex-1 px-4 py-3 min-h-[240px]">
              <Game />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
