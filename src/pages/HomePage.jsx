/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="pb-10 text-white movie-layout page-container">
        <h2 className="mb-10 text-3xl font-bold capitalize">Now Playing</h2>
        <MovieList type={"now_playing"}></MovieList>
      </section>
      <section className="pb-10 text-white movie-layout page-container">
        <h2 className="mb-10 text-3xl font-bold capitalize">
          Top rated movies
        </h2>
        <MovieList type={"top_rated"}></MovieList>
      </section>
      <section className="pb-10 text-white movie-layout page-container">
        <h2 className="mb-10 text-3xl font-bold capitalize">Top Trending</h2>
        <MovieList type={"popular"}></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
