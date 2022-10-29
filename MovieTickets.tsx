import * as React from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
export default function MovieTickets() {
  const { movieId } = useParams();
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
      movieName: 'Movie 7',
    },
    {
      movieId: 8,
      movieName: 'Movie 8',
    },
  ];
  let ticketsall = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'A9',
    'A10',
    'B1',
    'B2',
    'B3',
    'B4',
    'B5',
    'B6',
    'B7',
    'B8',
    'B9',
    'B10',
    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
    'C8',
    'C9',
    'C10',
    'D1',
    'D2',
    'D3',
    'D4',
    'D5',
    'D6',
    'D7',
    'D8',
    'D9',
    'D10',
    'E1',
    'E2',
    'E3',
    'E4',
    'E5',
    'E6',
    'E7',
    'E8',
    'E9',
    'E10',
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'F8',
    'F9',
    'F10',
  ];
  let [movie, setMovies] = React.useState(
    movieNames.filter((m) => m.movieId == movieId)
  );
  let [Tickets, setTickets] = React.useState(ticketsall);
  let [booktickets, setBooktickets] = React.useState([]);
  let UpdateNumber = (t) => {
    let filtered = Tickets.filter((ti) => ti != t);
    setTickets([...filtered].sort());
    setBooktickets([...booktickets, t].sort());
  };

  let unSelectSeats = (t) => {
    let filtered = booktickets.filter((ti) => ti != t);
    setBooktickets([...filtered].sort());
    setTickets([...Tickets, t].sort());
  };

  return (
    <div className="container-fluid">
      <div
        className="modal fade"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Check Out
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Thanks for choosing the Movie Hub, "Check Out" option is under
              Development. :) :)
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Book Seats
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3">
          <div className="card mt-3">
            <img
              src="https://cybertecz.in/wp-content/uploads/2019/10/free-movie-streaming-sites.jpg"
              className="card-img-top"
              alt="Movie Banner"
            />
            <div className="card-body">
              <h5 className="card-title">{movie[0].movieName}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-9">
          <div className=" container pt-2 card mt-3">
            <div className="container unselectTickets">
              <p>You can book your seats here ..</p>
              <div className="row">
                {Tickets.map((t) => {
                  return (
                    <div className="col-sm-1 mb-2">
                      <button
                        type="button"
                        className="btn btn-light btn-primary"
                        onClick={() => UpdateNumber(t)}
                      >
                        {t}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="container selectTickets mb-3">
              <p>Your Booked Seats</p>
              <p>You can unselect the seats by clicking the seat !</p>
              <div className="row">
                {booktickets.map((t) => {
                  return (
                    <div className="col-sm-1 mb-2">
                      <button
                        type="button"
                        className="btn btn-light btn-dark"
                        onClick={() => unSelectSeats(t)}
                      >
                        {t}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
