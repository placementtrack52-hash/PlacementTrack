<div align="center">

# 🎓 Prep Master

**A Next-Generation Gamified Learning & Placement Tracking Platform**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

[Frontend README](./frontend/README.md) · [Backend README](./backend/README.md) · [Report Bug](#)

</div>

---

## 🌟 About The Project

**Prep Master** is a comprehensive, full-stack learning platform engineered to help students track their coding practice, subject progress, company-specific Previous Year Questions (PYQs), and daily learning routines. 

Designed with modern aesthetics and blazing-fast performance, it transforms mundane study tracking into an engaging, gamified experience.

### ✨ Key Features

* 🎮 **Gamified Learning Tracker:** Accumulate points, maintain streaks, track accuracy, and unlock exclusive badges.
* 💻 **Coding & PYQ Mastery:** Granular progress tracking across specialized DSA topics and top-tier company interview questions.
* 🛡️ **Dual-Layer Persistence:** Never lose your data. Built with a lightning-fast `localStorage` cache for instant UI rendering, backed by bulletproof background synchronization to MongoDB.
* 🕵️ **Guest Mode:** Start learning instantly without an account. Your progress is securely cached locally until you're ready to sign up.
* 🔐 **Enterprise-Grade Security:** Secure, HTTP-only JWT cookie authentication, fully configured for complex cross-origin deployments.
* 📚 **Integrated Study Tools:** Seamlessly manage daily routines, submit platform feedback, and store digital notes.

---

## 🏗️ Architecture & Tech Stack

Prep Master utilizes a decoupled Client-Server architecture for maximum scalability.

| Layer | Technologies Used | Description |
| :--- | :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS, Recharts, Framer Motion | A highly interactive, responsive, and animated SPA (Single Page Application). |
| **Backend** | Node.js, Express.js, JWT, bcryptjs | A stateless, RESTful API engineered for speed and secure data management. |
| **Database** | MongoDB, Mongoose | NoSQL database utilizing atomic updates for high-performance surgical data operations. |

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
* **Node.js** (v18.0.0 or higher)
* **MongoDB** (Local instance on `mongodb://127.0.0.1:27017` or an Atlas URI)

### 1️⃣ Spin up the Backend
```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Start the development server
npm run dev
```
> 📍 The backend will be live at `http://localhost:5000`

### 2️⃣ Spin up the Frontend
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Setup environment variables (Ensures VITE_API_URL points to the backend)
cp .env.example .env

# Start the Vite development server
npm run dev
```
> 📍 The frontend will be live at `http://localhost:5173`

---

## 🌍 Deployment Ready

Prep Master is production-ready out of the box:
* **Frontend:** Optimized for Vercel, Netlify, or AWS Amplify.
* **Backend:** Ready for Render, Railway, or Heroku.
* **CORS & Cookies:** Environment-aware security flags automatically adjust to support secure cross-origin communication (`sameSite: 'none'`, `secure: true`) when `NODE_ENV=production`.

<div align="center">
  <br />
  <i>Built with passion to elevate the learning experience.</i>
</div>
