import fetch from 'node-fetch'

async function runTest() {
  console.log("Testing auth and persistence flow...");
  const baseUrl = 'http://localhost:5000/api';
  
  // 1. Signup/Login
  const creds = { email: 'persiste-test-2@example.com', password: 'password123', name: 'Test Persistence' };
  let res = await fetch(`${baseUrl}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(creds)
  });
  
  if (res.status === 409) {
    console.log("User exists, logging in...");
    res = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(creds)
    });
  }
  
  const cookie = res.headers.get('set-cookie');
  console.log("Auth cookie:", !!cookie);
  
  const { user } = await res.json();
  console.log("Logged in user:", user.id);
  
  // 2. Fetch UserData
  let meRes = await fetch(`${baseUrl}/user-data/me`, {
    headers: { 'Cookie': cookie }
  });
  let meData = await meRes.json();
  console.log("Initial completedTopics count:", Object.keys(meData.userData.progress.completedTopics).length);
  
  // 3. Update Progress (simulate completing a topic)
  const newProgress = { ...meData.userData.progress, completedTopics: { 'test_topic': true } };
  console.log("Saving progress...");
  let saveRes = await fetch(`${baseUrl}/user-data/progress`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Cookie': cookie },
    body: JSON.stringify({ progress: newProgress })
  });
  let saveData = await saveRes.json();
  console.log("Save response completedTopics:", saveData.progress.completedTopics);
  
  // 4. Logout (clear cookie)
  console.log("Logging out...");
  await fetch(`${baseUrl}/auth/logout`);
  
  // 5. Login again
  console.log("Logging in again...");
  let loginRes2 = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(creds)
  });
  const cookie2 = loginRes2.headers.get('set-cookie');
  
  // 6. Fetch UserData again
  let meRes2 = await fetch(`${baseUrl}/user-data/me`, {
    headers: { 'Cookie': cookie2 }
  });
  let meData2 = await meRes2.json();
  console.log("After relogin completedTopics:", meData2.userData.progress.completedTopics);
}

runTest().catch(console.error);
