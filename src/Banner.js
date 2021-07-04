import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(requests.fetchNetflixOriginals).then((response) => {
      setMovies(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    });
  }, []);
  console.log(movies);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents"></div>
      <h1 className="banner__ title">
        {movies?.title || movies?.name || movies?.original_name}
      </h1>
      <div className="banner__buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
        <h1 className="banner__description">
          {" "}
          {truncate(movies?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadebottom" />
    </header>
  );
};
export default Banner;
