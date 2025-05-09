# Student Dashboard

A responsive React-based student dashboard for managing student records. The app integrates Firebase Authentication (Google Sign-In) to restrict student creation and uses mock data to simulate a backend.

## 🚀 Features

* 🔐 Google login via Firebase
* 📋 View list of students
* 🎯 Filter students by course
* ➕ Add new students (requires login)
* ⚡ Mock API simulation for initial data

## 🔧 Tech Stack

* **React + Vite**
* **Firebase Authentication**
* **Tailwind CSS**
* **Axios / Axios-Mock-Adapter (for API simulation)**

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/student-dashboard.git
   cd student-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Firebase**

   Create a `.env` file in the root with your Firebase credentials:

   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Visit the app**

   Open [http://localhost:5173](http://localhost:5173) in your browser.


