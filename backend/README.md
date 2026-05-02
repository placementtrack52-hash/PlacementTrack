# Prep Master Backend

This backend is kept in a separate folder so your React frontend stays untouched.

## What it does

- connects to MongoDB
- creates secure user signup and login APIs
- saves company prep progress per user
- saves notes, routines, feedback, quiz progress, and preferences per user
- serves company question data from the existing JSON files in the frontend project

## Folder structure

- `src/config`: database connection
- `src/middleware`: auth guard
- `src/models`: MongoDB models
- `src/routes`: API routes
- `src/utils`: helper code to load company questions
- `src/server.js`: backend entry point

## API routes

- `GET /api/health`
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/auth/logout`
- `GET /api/companies`
- `GET /api/companies/:companyName`
- `GET /api/companies/:companyName/public`
- `GET /api/progress`
- `GET /api/progress/:companyName`
- `PUT /api/progress/:companyName`
- `GET /api/user-data/me`
- `PUT /api/user-data/progress`
- `POST /api/user-data/feedback`
- `GET /api/user-data/notes`
- `POST /api/user-data/notes`
- `PUT /api/user-data/notes/:id`
- `DELETE /api/user-data/notes/:id`
- `GET /api/user-data/routines`
- `POST /api/user-data/routines`
- `PUT /api/user-data/routines/:id`
- `DELETE /api/user-data/routines/:id`
- `GET /api/user-data/practice-attempts/:attemptKey`
- `PUT /api/user-data/practice-attempts/:attemptKey`
- `GET /api/user-data/preferences`
- `PUT /api/user-data/preferences`

## Setup

1. Copy `.env.example` to `.env`
2. Make sure MongoDB Community Server is running on your machine
3. Run `npm install` inside the `backend` folder
4. Run `npm run dev` inside the `backend` folder

## Local MongoDB

If you installed MongoDB Community Server with the default setup, this value usually works:

`mongodb://127.0.0.1:27017/prep-master`
