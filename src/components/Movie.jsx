import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  
  const apiKey = import.meta.env.VITE_API_KEY;
  const { id } = useParams();
  const [movie, setMovie] = useState();


  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}language=en-US`
        );
        const data = await res.json();
        console.log(data);
        setMovie(data);
      } catch (err) {
        console.error("Failed to fetch", err);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="individual">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_name}
        />
      </div>
      <div className="info">
        <p>First aired: {movie.first_air_date}</p>
        <p>{movie.overview}</p>
      </div>
      <button className="watch">Watch now</button>
      <button className="add-favorites">Add to favorites</button>
    </div>
  );
}

export default Movie;
