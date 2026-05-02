import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const AdminPYQPage = () => {
  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [uploadMsg, setUploadMsg] = useState(null)
  const [deleting, setDeleting] = useState(null)
  const [companyName, setCompanyName] = useState('')
  const fileRef = useRef(null)

  const fetchCompanies = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/pyq/companies`, { credentials: 'include' })
      const data = await res.json()
      setCompanies(data.companies || [])
    } catch {
      setCompanies([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchCompanies() }, [])

  const handleUpload = async (e) => {
    e.preventDefault()
    const file = fileRef.current?.files[0]
    if (!file || !companyName.trim()) {
      setUploadMsg({ type: 'error', text: 'Please enter a company name and select a PDF.' })
      return
    }
    const formData = new FormData()
    formData.append('company', companyName.trim())
    formData.append('pdf', file)
    setUploading(true)
    setUploadMsg(null)
    try {
      const res = await fetch(`${API_BASE}/pyq/upload`, {
        method: 'POST', credentials: 'include', body: formData,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setUploadMsg({ type: 'success', text: `✅ Uploaded "${file.name}" for ${companyName}` })
      setCompanyName('')
      if (fileRef.current) fileRef.current.value = ''
      fetchCompanies()
    } catch (err) {
      setUploadMsg({ type: 'error', text: `❌ ${err.message}` })
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (company, filename) => {
    if (!confirm(`Delete "${filename}" from ${company}?`)) return
    setDeleting(`${company}/${filename}`)
    try {
      await fetch(`${API_BASE}/pyq/${company}/${filename}`, {
        method: 'DELETE', credentials: 'include',
      })
      fetchCompanies()
    } catch { alert('Delete failed.') }
    finally { setDeleting(null) }
  }

  return (
    <PageShell
      title="Admin — PYQ Manager"
      subtitle="Upload company-wise PYQ PDFs. Users can view but not download them."
      actions={
        <Link to="/subjects/pyq" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-slate-50 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">
          View PYQ Page →
        </Link>
      }
    >
      {/* Upload Form */}
      <form onSubmit={handleUpload} className="rounded-[1.75rem] bg-gradient-to-br from-indigo-50 to-white p-8 shadow-soft dark:from-zinc-800 dark:to-zinc-900">
        <h2 className="mb-6 text-xl font-bold text-ink dark:text-white">📤 Upload PYQ PDF</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600 dark:text-zinc-300">Company Name</label>
            <input
              type="text"
              placeholder="e.g., TCS, Wipro, Google"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600 dark:text-zinc-300">Select PDF (max 50 MB)</label>
            <input
              type="file" accept=".pdf" ref={fileRef}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-ink file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-indigo-50 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-indigo-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:file:bg-zinc-700 dark:file:text-zinc-200"
            />
          </div>
        </div>
        {uploadMsg && (
          <div className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${uploadMsg.type === 'success' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300' : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'}`}>
            {uploadMsg.text}
          </div>
        )}
        <button type="submit" disabled={uploading} className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3 text-sm font-semibold text-white transition hover:opacity-80 disabled:opacity-50 dark:bg-white dark:text-black">
          {uploading ? (<><span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent dark:border-black" />Uploading...</>) : 'Upload PDF'}
        </button>
      </form>

      {/* Uploaded Files */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-ink dark:text-white">📁 Uploaded PDFs</h2>
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-400 border-t-transparent" />
          </div>
        ) : companies.length === 0 ? (
          <div className="rounded-2xl bg-slate-50 p-10 text-center text-slate-400 dark:bg-zinc-800 dark:text-zinc-500">No PDFs uploaded yet.</div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <div key={company.slug} className="rounded-[1.75rem] bg-white p-6 shadow-soft dark:bg-zinc-800">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-xl dark:bg-indigo-900/30">🏢</span>
                  <div>
                    <p className="font-bold text-ink dark:text-white">{company.displayName}</p>
                    <p className="text-xs text-slate-400 dark:text-zinc-500">{company.files.length} {company.files.length === 1 ? 'file' : 'files'}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {company.files.map((file) => (
                    <li key={file.slug} className="flex items-center justify-between gap-2 rounded-xl bg-slate-50 px-3 py-2 dark:bg-zinc-700">
                      <span className="truncate text-xs text-slate-600 dark:text-zinc-300">📑 {file.name.replace(/_/g, ' ').replace('.pdf', '')}</span>
                      <button
                        onClick={() => handleDelete(company.slug, file.slug)}
                        disabled={deleting === `${company.slug}/${file.slug}`}
                        className="shrink-0 rounded-lg bg-red-100 px-2 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-200 disabled:opacity-40 dark:bg-red-900/30 dark:text-red-400"
                      >
                        {deleting === `${company.slug}/${file.slug}` ? '...' : 'Delete'}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageShell>
  )
}

export default AdminPYQPage
