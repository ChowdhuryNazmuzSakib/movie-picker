import React, { useContext } from "react";
import data from "../../data/movies.json";
import Movie from "./Movie";
import { StateContext } from "../Root/Root";

const Movies = () => {
  const { showMovies, setShowMovies } = useContext(StateContext);
  const addMovieHandler = () => {
    setShowMovies(showMovies + 9);
  };
  const removeMovieHandler = () => {
    setShowMovies(showMovies - 9);
  };
  return (
    <div>
      <div>
        <h1 className="font-serif text-orange-400 text-center text-xl">
          Shows
        </h1>
        <div className="bg-white flex min-h-screen flex-wrap justify-center">
          {data.slice(0, showMovies).map((movie) => (
            <Movie key={movie.id} movie={movie}></Movie>
          ))}
        </div>
        <div className="text-center">
          {showMovies < 100 && (
            <button
              className="btn btn-secondary mr-3 btn-xs"
              onClick={addMovieHandler}
            >
              See More
            </button>
          )}

          {showMovies > 20 && (
            <button
              className="btn btn-secondary btn-xs"
              onClick={removeMovieHandler}
            >
              See Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
