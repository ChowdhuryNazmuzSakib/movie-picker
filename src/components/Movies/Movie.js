import React from "react";

const Movie = ({ movie, setWatchLater, setAlreadyWatched }) => {
  const handleWatchLater = () => {
    setWatchLater((prev) => [...prev, movie]);
  };

  const handleAlreadyWatched = () => {
    setAlreadyWatched((prev) => [...prev, movie]);
  };

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl m-3 p-1 flex justify-center border-2 border-rose-500">
        <figure className="width: 100%;">
          <img src={movie.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movie.title}</h2>
          <p>{movie.year}</p>
          <p>imDb: {movie.rating}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleWatchLater}
              className="btn btn-primary btn-xs"
            >
              Wishlist
            </button>
            <button
              onClick={handleAlreadyWatched}
              className="btn btn-primary btn-xs"
            >
              Watched
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
