<div align="center">

# ⚙️ Prep Master: Backend

**The Secure API & Data Persistence Layer**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)

</div>

---

## 📖 Overview

The Prep Master backend is a highly optimized, stateless **Node.js / Express.js** RESTful API. It is engineered to handle secure user authentication, complex data aggregation, and bulletproof progress persistence for the gamified frontend.

## 🗄️ Database Architecture

Built on **MongoDB** and **Mongoose**, the database relies on a powerful, decoupled schema design:

### `User` Document (`/src/models/User.js`)
* Strictly handles core identity (`name`, `email`, hashed `password`).
* Keeps authentication operations lightweight and completely separate from heavy progress data.

### `UserData` Document (`/src/models/UserData.js`)
* The absolute core of the platform. A highly flexible, unified document linked 1-to-1 with a `User`.
* **The `progress` Engine:** Utilizes MongoDB's `Mixed` type to store:
  * `completedTopics` (Granular DSA completion flags)
  * `completedProjects` & `completedPYQs`
  * `quizResults` & `finalTests`
  * `streak` metrics, `points`, and `unlockedBadges`
* **Ancillary Data:** Efficiently manages Arrays and Maps for `feedback`, `notes`, `routines`, and `practiceAttempts`.

---

## 🔌 API Endpoints

All routes are securely prefixed with `/api`.

### 🔐 Authentication (`/api/auth`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/signup` | Hashes password, creates user, and sets secure JWT cookie. |
| `POST` | `/login` | Verifies credentials and sets secure JWT cookie. |
| `POST` | `/logout` | Invalidates and clears the JWT cookie. |
| `GET`  | `/me` | Validates cookie and returns normalized `{ id, name, email }`. |

### 📈 User Progress (`/api/user-data`)
*All mutations are guarded by JWT `authMiddleware`.*
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/me` | Fetches the user's unified `UserData` document. |
| `PUT` | `/progress` | Safely replaces the entire `progress` object. |
| `PATCH`| `/progress` | **🔥 Surgical Updates:** Uses MongoDB `$set` with dot-notation to update deeply nested fields atomically (e.g., `progress.completedTopics.java:arrays: true`) without race conditions. |

---

## 🛡️ Enterprise Security & Deployment

* **Environment-Aware Cookies:** Security adapts to the environment. In development, cookies use `sameSite: 'lax'` and `secure: false`. In production (`NODE_ENV=production`), they automatically upgrade to `sameSite: 'none'` and `secure: true`, perfectly allowing the frontend and backend to be hosted on entirely different domains.
* **Idempotent Updates:** Data update endpoints utilize MongoDB `$set` ensuring that rapid network requests or spotty connections don't cause destructive race conditions.

---

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Configure Environment:**
   Copy the template and ensure your local MongoDB URI is set.
   ```bash
   cp .env.example .env
   ```
3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   *Your API will be actively listening at `http://localhost:5000`.*
