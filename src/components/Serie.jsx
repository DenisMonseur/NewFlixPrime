import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddToFavorites } from "../utils/AddToFavorites";

function Serie() {
  
  const apiKey = import.meta.env.VITE_API_KEY;
  const { id } = useParams();
  const [serie, setSerie] = useState();

  useEffect(() => {
    const fetchSerie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}language=en-US`
        );
        const data = await res.json();
        console.log(data);
        setSerie(data);
      } catch (err) {
        console.error("Failed to fetch", err);
      }
    };
    fetchSerie();
  }, [id]);

  if (!serie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="individual">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
          alt={serie.original_name}
        />
      </div>
      <div className="info">
        <h3>{serie.original_name}</h3>
        <p>{serie.overview}</p>
        <p>Released date: {serie.first_air_date}</p>
        <button className="watch">Watch now</button>
        <button
          className="add-favorites"
          onClick={() => AddToFavorites({ ...serie, mediaType: "tv" })}
        >
          Add to favorites
        </button>
      </div>
    </div>
  );
}

export default Serie;
