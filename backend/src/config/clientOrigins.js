const normalizeOrigin = (value) => value.trim().replace(/\/$/, '')

const rawOriginValues = [
  process.env.CLIENT_URL,
  process.env.CLIENT_URLS,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
]
  .filter(Boolean)
  .flatMap((value) => value.split(','))
  .map(normalizeOrigin)
  .filter(Boolean)

export const allowedOrigins = [...new Set(rawOriginValues)]

const getHostname = (origin) => {
  try {
    return new URL(origin).hostname
  } catch {
    return null
  }
}

const getVercelProjectSlug = (origin) => {
  const hostname = getHostname(origin)

  if (!hostname?.endsWith('.vercel.app')) {
    return null
  }

  const labels = hostname.split('.')
  return labels[0] || null
}

const vercelProjectSlugs = allowedOrigins
  .map(getVercelProjectSlug)
  .filter(Boolean)
  .map((slug) => {
    // Preview URLs look like "<project-slug>-git-main-<suffix>.vercel.app".
    // If the configured slug is itself a preview hostname, strip the preview suffix
    // back to the stable project slug when possible.
    const gitMarkerIndex = slug.indexOf('-git-')
    return gitMarkerIndex > 0 ? slug.slice(0, gitMarkerIndex) : slug
  })

export const isAllowedOrigin = (origin) => {
  if (!origin) return true

  const normalizedOrigin = normalizeOrigin(origin)
  if (allowedOrigins.includes(normalizedOrigin)) {
    return true
  }

  const hostname = getHostname(normalizedOrigin)
  if (!hostname?.endsWith('.vercel.app')) {
    return false
  }

  const candidateSlug = hostname.split('.')[0]
  return vercelProjectSlugs.some(
    (slug) => candidateSlug === slug || candidateSlug.startsWith(`${slug}-`),
  )
}

export const shouldUseSecureCookies = allowedOrigins.some((origin) => {
  try {
    const url = new URL(origin)
    return url.protocol === 'https:' && url.hostname !== 'localhost'
  } catch {
    return false
  }
})
