import * as React from 'react';
import './style.css';

export default function Movies() {
  let movieNames = [
    {
      movieId: 1,
      movieName: 'Movie 1',
    },
    {
      movieId: 2,
      movieName: 'Movie 3',
    },
    {
      movieId: 3,
      movieName: 'Movie 3',
    },
    {
      movieId: 4,
      movieName: 'Movie 4',
    },
    {
      movieId: 5,
      movieName: 'Movie 5',
    },
    {
      movieId: 6,
      movieName: 'Movie 6',
    },
    {
      movieId: 7,
      movieName: 'Movie 8',
    },
    {
      movieId: 8,
      movieName: 'Movie 8',
    },
  ];
  let [movies, setMovies] = React.useState(movieNames);
  let [filteredMovies, setFilteredMovies] = React.useState(movieNames);
  let changeMovie = (movieId) => {
    if (movieId === 'All') {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(movies.filter((m) => m.movieId == movieId));
    }
  };
  return (
    <div className="container">
      <br />
      <h1>View all Movies</h1>

      <div className="row">
        <div className="col-sm-4">
          <select
            className="form-control"
            onChange={($event) => {
              changeMovie($event.target.value);
            }}
          >
            <option value="All">Select All Movies</option>
            {movies.map((movie) => {
              return <option value={movie.movieId}>{movie.movieName}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="row">
        {filteredMovies.map((movie) => {
          return (
            <div className="col-sm-4">
              <div className="card mt-3">
                <img
                  src="https://cybertecz.in/wp-content/uploads/2019/10/free-movie-streaming-sites.jpg"
                  className="card-img-top"
                  alt="Movie Banner"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.movieName}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="btn btn-primary">Book Your Seat</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
