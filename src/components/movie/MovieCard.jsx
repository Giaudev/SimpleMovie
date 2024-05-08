/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Proptypes from "prop-types";
const MovieCard = ({
  item: { title, release_date, vote_average, poster_path },
}) => {
  return (
    <div className="h-full p-3 rounded-lg select-none movie-card bg-slate-800">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-[275px] object-cover rounded-lg mb-5"
      ></img>
      <div className="relative flex flex-col flex-1 h-[180px]">
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <div className="flex items-center justify-between mb-8 text-sm opacity-50">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button className="absolute w-full px-6 py-3 capitalize rounded-lg top-32 bg-primary -translate-y-1/4">
          Watch now
        </button>
      </div>
    </div>
  );
};
MovieCard.proptypes = {
  title: Proptypes.string,
};
export default MovieCard;
