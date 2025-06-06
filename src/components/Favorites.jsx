import { useState} from "react";

function Favorites() {
  const [favorites, setFavorites] = useState((JSON.parse(localStorage.getItem("favorites")) || []))
  

  const removeFavorites = (item) => {
    const newFavorites = favorites.filter(
      (f) => !(f.id === item.id && f.mediaType === item.mediaType)
    );
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  if (favorites.length == 0) {
    return (<h1>Your List is Empty</h1>)
  }

  return (
    <>
      {favorites.map((favorite) => (
        <div className="search" key={`${favorite.mediaType}-${favorite.id}`}>
          <div className="image">
            <img
              src={`https://image.tmdb.org/t/p/w500/${favorite.poster_path}`}
              alt={favorite.original_name || favorite.title || "No title"}
            />
          </div>
          <div className="info">
            <p>
              First aired:{" "}
              {favorite.first_air_date || favorite.release_date || "N/A"}
            </p>
            <p>{favorite.overview || "No overview available."}</p>
          </div>
          <button className="watch">Watch now</button>
          <button
            className="remove-favorites"
            onClick={() => removeFavorites(favorite)}
          >
            Remove from favorites
          </button>
        </div>
      ))}
    </>
  );
}

export default Favorites;
