/* eslint-disable no-unused-vars */
import React from "react";
import MovieList from "../components/movie/MovieList";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";

const MoviePage = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=2ade023ce297c7c01c459bb6ebc44329`,
    fetcher
  );
  const movies = data?.results || [];
  console.log(movies);
  return (
    <div className="py-10 page-container">
      <div className="flex gap-2 mb-10">
        <div className="flex-1">
          <input
            className="w-full p-3 text-white rounded-lg outline-none bg-slate-800"
            placeholder="Search Movies here..."
          ></input>
        </div>
        <button className="p-3 rounded-lg bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
