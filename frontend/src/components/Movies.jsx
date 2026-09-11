import useFetch from "../useFetch";

const Movies = () => {
    const { data, loading, error } = useFetch("https://movies-backend-xi.vercel.app/movies")
    
    console.log(data);

return (
  <div>
    {loading && <p>Loading...</p>}
    {data?.error && <p>{data?.error}</p>}
    <ul>
      {data?.map((movie) => (
        <li key={movie._id}>{movie.title}</li>
      ))}
    </ul>
  </div>
);
};

export default Movies;