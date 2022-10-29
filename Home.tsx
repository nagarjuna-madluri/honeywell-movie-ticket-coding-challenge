import * as React from 'react';
import './style.css';

export default function Home() {
  let movieNames = [
    'Movie 1',
    'Movie 2',
    'Movie 3',
    'Movie 4',
    'Movie 5',
    'Movie 6',
  ];
  let [movies, setMovies] = React.useState(movieNames);
  return (
    <div className="container">
      <br />
      <h1>Welcome to the Movie Hub</h1>

      <div className="row">
        {movies.map((movie) => {
          return (
            <div className="col-sm-4">
              <div className="card mt-3">
                <img
                  src="https://cybertecz.in/wp-content/uploads/2019/10/free-movie-streaming-sites.jpg"
                  className="card-img-top"
                  alt="Movie Banner"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie}</h5>
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
