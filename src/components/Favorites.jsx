import { useState } from "react";
import { toast } from "sonner";

function Favorites() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const removeFavorites = (item) => {
    const newFavorites = favorites.filter(
      (f) => !(f.id === item.id && f.mediaType === item.mediaType)
    );
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  if (favorites.length == 0) {
    return <h1 className="empty-list">Your List is Empty</h1>;
  }

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {favorites.map((favorite) => (
        <div
          className="individual"
          id="favs"
          key={`${favorite.mediaType}-${favorite.id}`}
        >
          <div className="image">
            <img
              src={`https://image.tmdb.org/t/p/w500/${favorite.poster_path}`}
              alt={favorite.original_name || favorite.title || "No title"}
            />
          </div>
          <div className="info">
            <h3>{favorite.original_name || favorite.title}</h3>
            <p>{favorite.overview || "No overview available."}</p>
            <p>
              Released date:{" "}
              {favorite.first_air_date || favorite.release_date || "N/A"}
            </p>
            <button className="watch">Watch now</button>
            <button
              className="add-favorites"
              onClick={() => removeFavorites(favorite)}
            >
              Remove from favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
