<div align="center">

# 🎨 Prep Master: Frontend

**The Interactive Face of the Learning Platform**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## 📖 Overview

The Prep Master frontend is a highly polished, responsive Single Page Application (SPA) built with **React 18** and **Vite**. It is designed to provide a frictionless, gamified user experience that motivates students to maintain consistency in their interview preparation.

## ⚡ Core Technologies

* **UI & Styling:** Tailwind CSS for utility-first responsive design.
* **Routing:** React Router v6 for seamless client-side navigation.
* **Animations:** Framer Motion for fluid layout transitions and micro-interactions.
* **Data Visualization:** Recharts for rendering dynamic, data-driven progress charts.
* **Icons:** Lucide React for crisp, modern SVG iconography.

---

## 🧠 State Management: The `ProgressContext` Engine

At the heart of the frontend lies `/src/context/ProgressContext.jsx`. This is the engine that calculates points, monitors streaks, tracks accuracy, and evaluates subject mastery in real-time.

> **🔥 The Dual-Layer Persistence Architecture**
> To ensure a zero-latency UI and guarantee data safety, the app uses a dual-layer strategy:
> 1. **Instant Local Cache (`localStorage`):** Every action instantly writes to the browser cache. This eliminates loading spinners and allows users to continue exactly where they left off, even across browser refreshes or while operating in "Guest Mode".
> 2. **Background Sync:** For authenticated users, the context silently mirrors local changes to the MongoDB backend asynchronously.
> 3. **Hydration Locks:** Advanced React `useRef` locks are utilized to prevent race conditions during the login phase, absolutely ensuring that your database state is never accidentally overwritten by stale cache data.

---

## 🎭 UI/UX Highlights

* **Gamified Dashboard:** Watch your "Road to Next Tier" progress bar fill up as you earn XP. View weekly rhythm charts and showcase dynamically unlocked badges.
* **Code Learning Module:** Navigate a beautifully structured, topic-by-topic roadmap of DSA concepts.
* **Company PYQ Tracker:** Check off Previous Year Questions tailored to top tech giants.
* **Global Feedback Widget:** A sleek, floating action button allowing users to submit feedback directly to the backend from any screen.

---

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Configure Environment:**
   Ensure your `.env` file contains the correct backend URL:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
3. **Start the Vite Server:**
   ```bash
   npm run dev
   ```
   *Your app will instantly launch at `http://localhost:5173`.*
