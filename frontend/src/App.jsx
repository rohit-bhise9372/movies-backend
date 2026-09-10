import "./App.css";
import MovieByTitle from "./components/MovieByTitle";
import Movies from "./components/Movies"

export default function App() {
  return (
    <main>
      <Movies />
      <MovieByTitle title = "Gully Boy"/>
  </main>
  );
}




