# 🎬 Movies Backend API

A RESTful backend API built with **Node.js, Express.js, MongoDB Atlas, and Mongoose**. This project provides CRUD operations for managing a movie database and is deployed on **Vercel**.

## 🚀 Live API

**Frontend URL:** https://movies-frontend-xi-kappa.vercel.app

**Backend URL:**  https://movies-backend-xi.vercel.app/movies

---

## 📌 Features

- Add a new movie
- Get all movies
- Get movie by title
- Get movies by director
- Get movies by genre
- Update movie by ID
- Delete movie by ID
- MongoDB Atlas integration
- CORS enabled for frontend deployment

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- Dotenv
- Vercel

---

## 📁 Project Structure

```text
movies-app/
│
├── backend/
│   ├── api/
│   │   └── index.js              # Express app, routes, and server entry point
│   ├── db/
│   │   └── db.connect.js         # MongoDB connection setup
│   ├── models/
│   │   └── movie.models.js       # Movie Mongoose schema
│   ├── .env                      # Environment variable
│   ├── .gitignore
│   ├── package.json
│   └── vercel.json               # Vercel deployment configuration
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── AllMovies.jsx         # Displays all movie titles
    │   │   ├── MovieByTitle.jsx      # Displays movie details by title
    │   ├── useFetch.js               # Custom hook for data fetching
    │   └── App.jsx                   # Combines all components
    ├── .gitignore
    ├── package.json
    └── vite.config.js
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/rohit-bhise9372/movies-backend.git
```

### 2. Go to project folder

```bash
cd movies-backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create `.env`

```env
MONGODB=your_mongodb_connection_string
```

### 5. Run locally

```bash
npm run dev
```

Server runs on:

```text
http://localhost:5000
```

---

# 📚 API Endpoints

## Root Route

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Check API status |

---

## Movies

### Get all movies

```http
GET /movies
```

### Get movie by title

```http
GET /movies/:title
```

Request Body:

```json
{
  "title": "Gully Boy",
  "releaseYear": 2019,
  "genre": ["Drama", "Musical"],
  "director": "Zoya Akhtar",
  "actors": ["Ranveer Singh", "Alia Bhatt"],
  "language": "Hindi",
  "country": "India",
  "rating": 7.9,
  "plot": "A young man from the slums aspires to be a rapper.",
  "awards": "Oscar Nomination",
  "posterUrl": "https://example.com/poster8.jpg",
  "trailerUrl": "https://example.com/trailer8.mp4"
}
```
## 🧪 Testing

Use **Postman** or Thunder Client to test all API endpoints.

---

## ☁️ Deployment

This backend is deployed using **Vercel** with MongoDB Atlas.

---


**Rohit Bhise**

GitHub: https://github.com/rohit-bhise9372
