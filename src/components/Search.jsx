import { useEffect, useState } from "react";
import { AddToFavorites } from "../utils/AddToFavorites";

function Search() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [mediaInfos, setMediaInfos] = useState();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchValue}`
        );
        const data = await res.json();
        console.log(data);
        setMediaInfos(data);
      } catch (err) {
        console.error("Failed to fetch", err);
      }
    };
    fetchMedia();
  }, [searchValue]);

  if (!mediaInfos) {
    return <p>Loading...</p>;
  }

  return (
    <div className="search">
      <label htmlFor="search-query">Type your search:</label>
      <input
        type="text"
        id="search-query"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {mediaInfos &&
        mediaInfos.results.map((media) => (
          <div className="individual" key={media.id}>
            <div className="image">
              <img
                src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
                alt={media.original_name || media.title || "No title"}
              />
            </div>
            <div className="info">
              <h3>{media.original_name || media.title}</h3>
              <p>{media.overview || "No overview available."}</p>
              <p>
                Released date:{" "}
                {media.first_air_date || media.release_date || "N/A"}
              </p>
              <button className="watch">Watch now</button>
              <button
                className="add-favorites"
                onClick={() =>
                  AddToFavorites({ ...media, mediaType: media.media_type })
                }
              >
                Add to favorites
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Search;
