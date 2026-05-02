import { AlertTriangle, RefreshCcw } from 'lucide-react'
import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class DashboardErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false }

  public static getDerivedStateFromError() {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Study dashboard crashed:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0e1a] px-4 py-20 text-white">
          <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/15 text-rose-300">
              <AlertTriangle className="h-7 w-7" />
            </div>
            <h1 className="mt-6 text-2xl font-bold">Dashboard unavailable</h1>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Something went wrong while loading the analytics view. Refreshing the page usually fixes temporary state issues.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#4361ee] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02]"
            >
              <RefreshCcw className="h-4 w-4" />
              Reload dashboard
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default DashboardErrorBoundary
