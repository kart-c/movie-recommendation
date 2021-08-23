import React from "react";
import "./styles.css";

const moviesList = {
  thriller: [
    {
      movieName: "The usual suspects",
      description:
        "Five criminals meet during a routine police line-up. Upon their release, they plan to pull off a dangerous heist involving precious emeralds worth three million dollars.",
      rating: 8.5
    },
    {
      movieName: "Se7en",
      description:
        "A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.",
      rating: 8.6
    },
    {
      movieName: "Nightcrawler",
      description:
        "Louis Bloom, a petty thief, realises that he can make money by capturing photographs of crime scenes and starts resorting to extreme tactics to get them.",
      rating: 8.2
    }
  ]
};

export default function App() {
  return (
    <div>
      <h1>Good Movies</h1>
      <p>Check out my favorite selection of movies.</p>
      <button>Thriller</button>
      <button>Science Fiction</button>
      <button>Fantasy</button>
      <button>Romantic</button>
    </div>
  );
}
