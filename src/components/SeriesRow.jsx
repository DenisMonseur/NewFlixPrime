import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SeriesRow({ apiUrl, title }) {
  const [series, setSeries] = useState();

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
        setSeries(data);
      } catch (err) {
        console.error("Failed to fetch", err);
      }
    };
    fetchSeries();
  }, [apiUrl]);

  if (!series) {
    return <p>Loading...</p>;
  }

  return (
    <div className="row">
      <h1>{title}</h1>
      {series &&
        series.results.map((serie) => (
          <Link to={`/serie/${serie.id}`} key={serie.id}>
            <div className="card">
              <div className="image">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                  alt=""
                />
              </div>
              {/* <div className="info">
              <p className="title">{serie.original_name}</p>
              <p className="date">{serie.first_air_date}</p>
              <p className="resume">{serie.overview}</p>
            </div> */}
            </div>
          </Link>
        ))}
    </div>
  );
}

export default SeriesRow;
