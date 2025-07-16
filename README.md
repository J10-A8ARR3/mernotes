# 📝 Project Setup Guide

## 🧪 Environment Configuration

Before running the project, make sure to configure your `.env` file in the **`/backend`** directory:

```env
# /backend/.env
MONGO_URI=<your_mongo_uri>

UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```

---

## 🔧 Run the Backend

Follow these steps to start the backend server:

```bash
cd backend
npm install
npm run dev
```

---

## 💻 Run the Frontend

Start the frontend development server with:

```bash
cd frontend
npm install
npm run dev
```

---

## 📂 Project Structure

```
/
├── backend/
│   ├── .env
│   └── ...
├── frontend/
│   └── ...
└── README.md
```

---

## ✅ Notes

* Make sure MongoDB and Redis credentials are correctly set in the `.env` file.
* This project uses **Vite** for frontend and **Express.js** with **MongoDB** and **Upstash Redis** for backend.

---

Happy coding! 🚀
