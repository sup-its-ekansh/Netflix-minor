import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  function brief(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  // console.log(movie)

  return (
    <div
      className="relative h-[580px] text-white object-contain"
      style={{
        
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="pt-64 ml-[48px]">
        <h1 className="text-4xl text-white font-extrabold">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
          <button className="cursor-pointer hover:bg-[#e6e6e6] hover:text-black hover:duration-300 text-white outline-none border-none  rounded-md px-8 py-2 bg-[#333333] my-4 mr-4">
            Play
          </button>
          <button className="cursor-pointer hover:bg-[#e6e6e6] hover:text-black hover:duration-300 text-white outline-none border-none  rounded-md px-8 py-2 bg-[#333333] my-4 mr-4">
            List
          </button>
        </div>
        <div>
          <h1 className="w-[45rem]  text-sm pt-4 font-medium max-w-[300px] leading-[1.3] ">
          {brief(movie?.overview, 150)}
          </h1>
        </div>
        <div className="faded" />
      </div>
    </div>
  );
};

export default Banner;
