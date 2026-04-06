# ✅ Todo List App

> **React Assignment — Day 02**
> **Instructor:** Eng. Islam Baidaq
> **Program:** ITI — ICC | Full-Stack MEARN Track
> **Developer:** Mahmoud Awad Saad

---

## 📌 Description

A simple mobile-first Todo List built with **React 19**, **React Router v7**, and **Tailwind CSS v4**.

This project was built as a practical assignment during the React module at ITI, focusing on:
- Component-based architecture
- State management with `useState` and `useEffect`
- Client-side routing with React Router
- Persistent storage via `localStorage`

---

## 🎨 Theme

Green · Clean · Minimal — intentionally kept simple and functional.

---

## 🔗 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Progress overview + quick stats |
| `/tasks` | Tasks | Add, filter, and manage tasks |
| `/tasks/:id` | Task Detail | View, complete, or delete a single task |
| `/profile` | Profile | Developer info + course credit |

---

## ✨ Features

- ➕ Add tasks via input or Enter key
- ✅ Toggle tasks complete / incomplete
- 🗑️ Delete tasks
- 🔍 Filter: All · Active · Completed
- 📊 Progress bar on Home page
- 🔗 Click any task to view its detail page
- 💾 Data persists via `localStorage`
- 📱 Mobile-first responsive layout

---

## 🛠️ Tech Stack

| Tech | Usage |
|---|---|
| `React 19` | UI components + hooks |
| `React Router v7` | Client-side routing |
| `Tailwind CSS v4` | Utility-first styling |
| `Font Awesome 7` | Icons |
| `Vite 8` | Build tool + dev server |
| `localStorage` | Data persistence |

---

## 📁 Structure

```
src/
├── App.jsx                 ← Root — state + routing
├── main.jsx                ← Entry point
├── index.css               ← Tailwind import
├── components/
│   ├── Navbar.jsx          ← Bottom navigation bar
│   ├── AddTask.jsx         ← Input + add button
│   ├── FilterTask.jsx      ← All / Active / Done tabs
│   ├── TaskItem.jsx        ← Single task row
│   └── TaskList.jsx        ← Renders list of TaskItems
└── pages/
    ├── Home.jsx            ← Dashboard + progress
    ├── Tasks.jsx           ← Main task page
    ├── TaskDetail.jsx      ← Single task view
    └── Profile.jsx         ← Developer profile
```

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```

---

## 📐 React Concepts Applied

| Concept | Where |
|---|---|
| `useState` | Task list, filter state, input value |
| `useEffect` | Sync tasks to `localStorage` |
| Lazy initialiser | Load saved tasks on first render |
| Props drilling | Tasks + handlers passed from App → pages → components |
| Conditional rendering | Empty state, task status badges |
| List rendering | `tasks.map()` with unique `key` |
| Controlled inputs | `value` + `onChange` on text input |
| `useParams` | Read task ID from URL in TaskDetail |
| `useNavigate` | Redirect after toggle/delete |

---

## 🙏 Credits

| | |
|---|---|
| **Instructor** | Eng. Islam Baidaq |
| **Course** | React — ITI ICC Program |
| **Developer** | Mahmoud Awad Saad |
| **GitHub** | [@mahmoud112001](https://github.com/mahmoud112001) |

---

*Todo List · React Assignment · Day 02 · ITI ICC Program · 2026*