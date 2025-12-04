# SmartPrep – AI-Powered Interview Preparation App

SmartPrep is a full-stack MERN application designed to help users prepare for technical interviews more efficiently.  
It leverages **Gemini AI** to generate role-specific interview questions, beginner-friendly explanations, concept breakdowns, and personalized preparation workflows.

This project is being built as part of a **Final Year Engineering Project**, but follows **real-world, production-level standards** in both frontend and backend.



## 🚀 Features

### ✔ AI-Powered Question Generation
- Generates role-specific interview questions based on:
  - Role (e.g., React Developer, MERN Developer, Java Developer)
  - Experience level
  - Selected topics
  - Desired number of questions
- Provides beginner-friendly answers with optional code examples.
- Output is always structured JSON for reliability.

### ✔ AI-Based Concept Explanation
- Provides clear, concise explanations for any technical question.
- Generated using a dedicated AI prompt template.
- Output: JSON containing title + explanation.

### ✔ Authentication & Authorization
- Secure JWT-based authentication.
- Login, Signup, and Profile Management.
- Protected API routes for sessions, questions, and AI usage.

### ✔ Smart Session Management
- Create interview sessions with dynamically generated questions.
- Fetch all sessions created by the user.
- Delete individual sessions.
- View complete session details with all questions attached.

### ✔ Question Enhancements
- Pin/Unpin any question.
- Add custom notes to questions.
- Add additional questions to an existing session.

### ✔ Auto Login & Persistent Authentication
- Uses a global UserContext for:
  - user state
  - updateUser()
  - clearUser()
  - auto-login on refresh
- Token is stored in localStorage and verified on each refresh.

### ✔ Modern UI (In Progress)
- Clean, responsive design built with Tailwind CSS.
- Login/Signup implemented via modal.
- Dashboard UI currently under development.

### ✔ Upcoming Feature: Voice Analysis
This feature will analyze:
- speech fluency  
- pace  
- filler words  
- pitch variation  

Using rule-based logic for academic demonstration.



## 🧠 Tech Stack

### **Frontend**
- React.js
- Context API
- Axios (with custom Axios Instance)
- React Router
- Tailwind CSS

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (Profile image upload)

### **AI**
- Gemini API (`gemini-2.0-flash-lite`)
- Custom prompt engineering

### **Machine Learning / Python (Voice Analysis & Signal Processing)**
- Python (for offline/auxiliary audio analysis modules)
- Libraries & tools:
  - `pyAudioAnalysis` or `librosa` — audio feature extraction (energy, MFCCs, tempo)
  - `parselmouth` (Praat bindings) — pitch, formants, and prosody analysis
  - `pydub` — audio file handling and preprocessing
  - `scikit-learn` — quick rule-based models or classical classifiers (if needed)
  - `numpy`, `scipy` — numeric and signal-processing utilities
- Note: Voice analysis will use rule-based feature extraction (speech rate, filler-words, pauses, pitch variation) for demo/academic purposes; Python modules will be used server-side or in a separate analysis service.




## 🔐 API Overview

### **Auth APIs**
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/auth/profile` (protected)

### **Session APIs**
- POST `/api/sessions/create`
- GET `/api/sessions/my-sessions`
- GET `/api/sessions/:id`
- DELETE `/api/sessions/:id`

### **Question APIs**
- POST `/api/questions/add`
- POST `/api/questions/:id/pin`
- POST `/api/questions/:id/note`

### **AI APIs**
- POST `/api/ai/generate-questions`
- POST `/api/ai/generate-explanation`



## 📌 Core Architecture Highlights 

- **Production-style folder structure** following MVC.
- **Fully decoupled API layer** using `apiPaths.js`.
- **Centralized Axios Instance** with:
  - token interceptor  
  - error interceptor  
  - timeout handling  

- **Global UserContext** implementing:
  - auto-login via token  
  - persistent user state  
  - clean logout mechanism  
  - profile fetching on refresh  

- **Prompt engineering** for:
  - structured JSON outputs  
  - predictable parsing  
  - reliable AI responses  

- **Modular, scalable backend** where each feature has:
  - dedicated controller  
  - dedicated route  
  - protected middleware  

---

## 🎯 Current Progress Status

- [x] Auth UI (Login/Signup)
- [x] Auth APIs
- [x] UserContext + auto-login
- [x] Profile info + logout
- [x] AI APIs
- [x] Session APIs
- [x] Question APIs
- [x] Axios Instance + API Paths
- [ ] Dashboard UI (in progress)
- [ ] Session detail UI
- [ ] AI explanation expansion UI
- [ ] Pin/Notes UI
- [ ] Voice Analysis Module
- [ ] Production deployment

---

## 🏗 Setup Instructions

### **Backend**
```bash
cd backend
npm install
npm start
```
### **Frontend**
```bash
cd frontend
npm install
npm run dev
```


## 🧑‍💻 Author

**Aryan Dumale**  
Final Year Computer Engineering  Student
Savitribai Phule Pune University (SPPU)  
Full-Stack MERN Developer 
GitHub: https://github.com/aryandumale04 
LinkedIn: https://www.linkedin.com/in/aryan-d-b83409257/

---

## ⭐ Acknowledgements

SmartPrep was built using modern open-source tools, documentation, and APIs.  
Special thanks to:

- **Google Gemini API** – for powering the interview question & explanation generation  
- **React.js Community** – for extensive frontend guidance and best practices  
- **Tailwind CSS** – for enabling fast and beautiful UI development  
- **Express.js & Node.js Community** – for backend structure, middleware patterns, and security practices  
- **Open-source tutorials & documentation** that helped in learning and implementing best-practices across MERN stack  




