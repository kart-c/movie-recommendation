import React, { useState } from "react";
import "./styles.css";

const moviesList = {
  thriller: [
    {
      movieName: "The usual suspects",
      description:
        "Five criminals meet during a routine police line-up. Upon their release, they plan to pull off a dangerous heist involving precious emeralds worth three million dollars.",
      rating: 4.5
    },
    {
      movieName: "Se7en",
      description:
        "A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.",
      rating: 4.6
    },
    {
      movieName: "Nightcrawler",
      description:
        "Louis Bloom, a petty thief, realises that he can make money by capturing photographs of crime scenes and starts resorting to extreme tactics to get them.",
      rating: 4.5
    }
  ],
  action: [
    {
      movieName: "Taken",
      description:
        "An ex-Secret Service agent's teenage daughter is abducted by human traffickers while on a trip to Paris. With almost no information on her whereabouts, he travels to Paris to find and save her.",
      rating: 4.4
    },
    {
      movieName: "John Wick",
      description:
        "The story focuses on John Wick (Reeves) searching for the men who broke into his home, stole his vintage car and killed his puppy, which was a last gift to him from his recently deceased wife.",
      rating: 4.6
    },
    {
      movieName: "The Dark Knight",
      description:
        "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
      rating: 4.8
    }
  ],
  fantasy: [
    {
      movieName: "The Lord of the Rings Trilogy",
      description:
        "The Lord of the Rings is a series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King.",
      rating: 5
    },
    {
      movieName: "Pan’s Labyrinth",
      description:
        "Ofelia moves with her mother to her stepfather's house. At night, a fairy leads her to a faun who informs her that she is a princess and she needs to participate in three tasks to prove her royalty.",
      rating: 4.7
    },
    {
      movieName: "Hugo",
      description:
        "Hugo is a young orphan who loves pottering around with the station clocks and whose most treasured possession is his late father's automaton. His mission is to find a key that will get it working.",
      rating: 4.5
    }
  ],
  comedy: [
    {
      movieName: "Hunt for the Wilderpeople",
      description:
        "A boy and his foster father become the subjects of a manhunt after they get stranded in the New Zealand wilderness.",
      rating: 4.7
    },
    {
      movieName: "Groundhog Day",
      description:
        "Phil, a self-centred weatherman, goes to the town of Punxsutawney for an assignment. He is later shocked when he wakes up the next morning and realises that he is reliving the same day over and over.",
      rating: 4.5
    },
    {
      movieName: "Rush Hour",
      description:
        "When a Chinese consul's young daughter is kidnapped, Hong Kong Detective Lee must team up with Carter, a loud-mouthed LA detective. Distinctive work styles and cultural differences pose hiccups.",
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
          <p>{movies.description}</p>
          <div>
            <i className="star icon"></i> {movies.rating}/5
          </div>
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
          <p>{selectedMovie.description}</p>
          <div>
            <i class="star icon"></i> {selectedMovie.rating}/5
          </div>
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
