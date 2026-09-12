import { useState } from "react";
import useFetch from "../useFetch";

const Movies = () => {
  const [successMessage, setSuccessMessage] = useState();
  const { data, loading, error } = useFetch(
    "https://movies-backend-xi.vercel.app/movies"
  );

  const handleDelete = async (movieId) => {
    try {
      const response = await fetch(
        `https://movies-backend-xi.vercel.app/movies/${movieId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw "Failed to delete movie.";
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Movie deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="movies-container">
      <h2>Movies</h2>

      {loading && <p className="status-text">Loading...</p>}
      {data?.error && <p className="status-text">{data?.error}</p>}

      <ul className="movie-list">
        {data?.map((movie) => (
          <li key={movie._id} className="movie-item">
            <span>{movie.title}</span>
            <button onClick={() => handleDelete(movie._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <p className="success-banner">{successMessage}</p>
    </div>
  );
};

export default Movies;