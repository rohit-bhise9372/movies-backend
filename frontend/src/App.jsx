import "./App.css";
import MovieByTitle from "./components/MovieByTitle";
import Movies from "./components/Movies"
import AddMovieForm from "./components/AddMovieForm"

export default function App() {
  return (
    <main>
      <AddMovieForm/>
      <Movies />
      <MovieByTitle title="Gully Boy" />

  </main>
  );
}




