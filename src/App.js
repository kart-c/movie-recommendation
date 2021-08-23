import React, { useState } from "react";
import "./styles.css";

const moviesList = {
  thriller: [
    {
      movieName: "The usual suspects",
      rating: 4.5
    },
    {
      movieName: "Se7en",
      rating: 4.6
    },
    {
      movieName: "Nightcrawler",
      rating: 4.5
    }
  ],
  action: [
    {
      movieName: "Taken",
      rating: 4.4
    },
    {
      movieName: "John Wick",
      rating: 4.6
    },
    {
      movieName: "The Dark Knight",
      rating: 4.8
    }
  ],
  fantasy: [
    {
      movieName: "The Lord of the Rings Trilogy",
      rating: 5
    },
    {
      movieName: "Pan’s Labyrinth",
      rating: 4.7
    },
    {
      movieName: "Hugo",
      rating: 4.5
    }
  ],
  comedy: [
    {
      movieName: "Hunt for the Wilderpeople",
      rating: 4.7
    },
    {
      movieName: "Groundhog Day",
      rating: 4.5
    },
    {
      movieName: "Rush Hour",
      rating: 4.6
    }
  ]
};

export default function App() {
  const firstGenre = Object.values(moviesList)[0];

  const [movieGenre, setMovieGenre] = useState([
    firstGenre.map((movies) => {
      return (
        <div key={movies.movieName} className="card">
          <h2>{movies.movieName}</h2>
          <div>Rating: {movies.rating}/5</div>
        </div>
      );
    })
  ]);

  const movieGenreClickHandler = (e) => {
    const selectedMoviesList = moviesList[e.target.innerText.toLowerCase()];
    const card = selectedMoviesList.map((selectedMovie) => {
      return (
        <div key={selectedMovie.movieName} className="card">
          <h2>{selectedMovie.movieName}</h2>
          <div>Rating: {selectedMovie.rating}/5</div>
        </div>
      );
    });
    return setMovieGenre(card);
  };
  return (
    <div>
      <h1>
        <i className="video icon"></i>
        Good Movies
      </h1>
      <p>Check out my favorite selection of movies.</p>
      <div className="buttons">
        <button onClick={movieGenreClickHandler}>Thriller</button>
        <button onClick={movieGenreClickHandler}>Action</button>
        <button onClick={movieGenreClickHandler}>Fantasy</button>
        <button onClick={movieGenreClickHandler}>Comedy</button>
      </div>
      <div>{movieGenre}</div>
    </div>
  );
}
