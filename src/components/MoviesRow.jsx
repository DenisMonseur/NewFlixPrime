import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MoviesRow({ apiUrl, title }) {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
        setMovies(data);
      } catch (err) {
        console.error("Failed to fetch", err);
      }
    };
    fetchMovies();
  }, [apiUrl]);

  if (!movies) {
    return <p>Loading...</p>;
  }

  return (
    <div className="row">
      <h1>{title}</h1>
      {movies &&
        movies.results.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="card">
              <div className="image">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
              </div>
              {/* <div className="info">
              <p className="title">{movie.original_name}</p>
              <p className="date">{movie.first_air_date}</p>
              <p className="resume">{movie.overview}</p>
            </div> */}
            </div>
          </Link>
        ))}
    </div>
  );
}

export default MoviesRow;
