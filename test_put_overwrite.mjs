import fetch from 'node-fetch'
async function test() {
  const baseUrl = 'http://localhost:5000/api'
  // Login
  const res = await fetch(baseUrl + '/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'persiste-test-2@example.com', password: 'password123' })
  })
  const cookie = res.headers.get('set-cookie')
  
  // Read DB
  let me = await fetch(baseUrl + '/user-data/me', { headers: { Cookie: cookie } }).then(r=>r.json())
  console.log('Before PUT:', me.userData.progress.completedTopics)
  
  // Simulate PUT with empty state
  await fetch(baseUrl + '/user-data/progress', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Cookie: cookie },
    body: JSON.stringify({ progress: {} })
  })
  
  // Read DB
  me = await fetch(baseUrl + '/user-data/me', { headers: { Cookie: cookie } }).then(r=>r.json())
  console.log('After PUT empty:', me.userData.progress.completedTopics)
}
test()
