const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const defaultHeaders = {
  'Content-Type': 'application/json',
}

const buildOptions = (options = {}) => ({
  credentials: 'include',
  ...options,
  headers: {
    ...defaultHeaders,
    ...(options.headers ?? {}),
  },
})

export const apiRequest = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, buildOptions(options))
  const contentType = response.headers.get('content-type') ?? ''
  const payload = contentType.includes('application/json') ? await response.json() : null

  if (!response.ok) {
    throw new Error(payload?.message ?? 'Request failed.')
  }

  return payload
}

export const authApi = {
  signup: (body) =>
    apiRequest('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(body),
    }),
  login: (body) =>
    apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(body),
    }),
  logout: () =>
    apiRequest('/auth/logout', {
      method: 'POST',
    }),
  me: () => apiRequest('/auth/me'),
}

export const userDataApi = {
  getMe: () => apiRequest('/user-data/me'),
  saveProgress: (progress) =>
    apiRequest('/user-data/progress', {
      method: 'PUT',
      body: JSON.stringify({ progress }),
    }),
  submitFeedback: (payload) =>
    apiRequest('/user-data/feedback', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  getNotes: () => apiRequest('/user-data/notes'),
  createNote: (payload) =>
    apiRequest('/user-data/notes', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  updateNote: (id, payload) =>
    apiRequest(`/user-data/notes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    }),
  deleteNote: (id) =>
    apiRequest(`/user-data/notes/${id}`, {
      method: 'DELETE',
    }),
  getRoutines: () => apiRequest('/user-data/routines'),
  createRoutine: (payload) =>
    apiRequest('/user-data/routines', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  updateRoutine: (id, payload) =>
    apiRequest(`/user-data/routines/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    }),
  deleteRoutine: (id) =>
    apiRequest(`/user-data/routines/${id}`, {
      method: 'DELETE',
    }),
  getPracticeAttempt: (attemptKey) =>
    apiRequest(`/user-data/practice-attempts/${encodeURIComponent(attemptKey)}`),
  savePracticeAttempt: (attemptKey, attempt) =>
    apiRequest(`/user-data/practice-attempts/${encodeURIComponent(attemptKey)}`, {
      method: 'PUT',
      body: JSON.stringify({ attempt }),
    }),
  getPreferences: () => apiRequest('/user-data/preferences'),
  savePreferences: (preferences) =>
    apiRequest('/user-data/preferences', {
      method: 'PUT',
      body: JSON.stringify({ preferences }),
    }),
}

export const companyProgressApi = {
  getAll: () => apiRequest('/progress'),
  getOne: (companyName) => apiRequest(`/progress/${encodeURIComponent(companyName)}`),
  save: (companyName, progress) =>
    apiRequest(`/progress/${encodeURIComponent(companyName)}`, {
      method: 'PUT',
      body: JSON.stringify(progress),
    }),
}

export const codeApi = {
  getCategories: () => apiRequest('/code/categories'),
  getByCategory: (category) =>
    apiRequest(`/code/category/${encodeURIComponent(category)}`),
  getProblem: (id) => apiRequest(`/code/problem/${id}`),
}

export const feedbackApi = {
  submit: (payload) =>
    apiRequest('/feedback', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  submitHelpful: (payload) =>
    apiRequest('/feedback/helpful', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return apiRequest(`/feedback${query ? `?${query}` : ''}`)
  },
  updateStatus: (id, payload) =>
    apiRequest(`/feedback/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    }),
}
