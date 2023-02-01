import React, { useEffect, useState } from "react";
import axios from "./axios";
import './row.css';

const Rows = ({ title, fetchUrl, isLargeRow = false }) => {

  
  const base_url = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <div className="row">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="row__posters">
          {movie.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) /* Prevent dead links */ ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Rows;
