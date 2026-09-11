const express = require("express");
const cors = require("cors");

const app = express();

const { initializeDatabase } = require("../db/db.connect");
const Movie = require("../models/movie.models");

// Connect Database
initializeDatabase();

// CORS Configuration
const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// ---------------------------------------------------------
// Add new movie
// ---------------------------------------------------------

async function createMovie(newMovie) {
  const movie = new Movie(newMovie);
  return await movie.save();
}

app.post("/movies", async (req, res) => {
  try {
    const savedMovie = await createMovie(req.body);

    res.status(201).json({
      message: "Movie added successfully.",
      movie: savedMovie,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to add movie.",
    });
  }
});

// ---------------------------------------------------------
// Read all movies
// ---------------------------------------------------------

async function readAllMovies() {
  return await Movie.find();
}

app.get("/movies", async (req, res) => {
  try {
    const movies = await readAllMovies();

    if (movies.length !== 0) {
      res.json(movies);
    } else {
      res.status(404).json({ error: "No movies found." });
    }
  } catch (error) {
    console.error(error); // 👈 add this

    res.status(500).json({
      error: error.message, // 👈 change this
    });
  }
});

// ---------------------------------------------------------
// Read movie by title
// ---------------------------------------------------------

async function readMovieByTitle(movieTitle) {
  return await Movie.findOne({ title: movieTitle });
}

app.get("/movies/:title", async (req, res) => {
  try {
    const movie = await readMovieByTitle(req.params.title);

    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({
        error: "Movie not found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch movie.",
    });
  }
});

// ---------------------------------------------------------
// Read movies by director
// ---------------------------------------------------------

async function readMovieByDirector(directorName) {
  return await Movie.find({ director: directorName });
}

app.get("/movies/director/:directorName", async (req, res) => {
  try {
    const movies = await readMovieByDirector(req.params.directorName);

    if (movies.length !== 0) {
      res.json(movies);
    } else {
      res.status(404).json({
        error: "No movies found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch movies.",
    });
  }
});

// ---------------------------------------------------------
// Read movies by genre
// ---------------------------------------------------------

async function readMovieByGenre(genreName) {
  return await Movie.find({ genre: genreName });
}

app.get("/movies/genres/:genreName", async (req, res) => {
  try {
    const movies = await readMovieByGenre(req.params.genreName);

    if (movies.length !== 0) {
      res.json(movies);
    } else {
      res.status(404).json({
        error: "No movies found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch movies.",
    });
  }
});

// ---------------------------------------------------------
// Update movie by ID
// ---------------------------------------------------------

async function updateMovieById(movieId, dataToUpdate) {
  return await Movie.findByIdAndUpdate(movieId, dataToUpdate, {
    new: true,
  });
}

app.post("/movies/:movieId", async (req, res) => {
  try {
    const updatedMovie = await updateMovieById(
      req.params.movieId,
      req.body
    );

    if (updatedMovie) {
      res.status(200).json({
        message: "Movie updated successfully.",
        movie: updatedMovie,
      });
    } else {
      res.status(404).json({
        error: "Movie not found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to update movie.",
    });
  }
});

// ---------------------------------------------------------
// Delete movie by ID
// ---------------------------------------------------------

async function deleteMovieById(movieId) {
  return await Movie.findByIdAndDelete(movieId);
}

app.delete("/movies/:movieId", async (req, res) => {
  try {
    const deletedMovie = await deleteMovieById(req.params.movieId);

    if (deletedMovie) {
      res.status(200).json({
        message: "Movie deleted successfully.",
      });
    } else {
      res.status(404).json({
        error: "Movie not found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete movie.",
    });
  }
});

// ---------------------------------------------------------
// Root Route
// ---------------------------------------------------------

app.get("/", (req, res) => {
  res.json({
    message: "Movie API is running successfully.",
  });
});

// ---------------------------------------------------------
// Local pe chalega, Vercel pe nahi
// ---------------------------------------------------------

if (require.main === module) {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
}

module.exports = app;