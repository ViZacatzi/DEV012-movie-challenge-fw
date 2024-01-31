import React, { useEffect, useState } from "react";
import MovieCard, { MovieProps } from "./MovieCard.tsx";

function MovieList() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ1MDUyNmM3NjdlOTJlNzU2NWQ3NGQ1NTU2YWMyMSIsInN1YiI6IjY1YjEzMjM4Yjc2Y2JiMDE5NDJiYzkzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R1G88SYkt9JhNQV2zOy1dQA7CUlTPLW-cv81oo84XtA",
      },
    };

    return fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => data.results)
      .catch((err) => {
        console.error("Error fetching movies:", err);
        // Puedes lanzar el error nuevamente si lo deseas
        throw err;
      });
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = () => {
    getMovies().then((movies) => {
      console.log("Array de películas:", movies);
      setMovies(movies);
    });
  };

  return (
    <section className="movie-list-container">
      <ul>
        {movies.map((film) => (
          <MovieCard
            key={film.id}
            imageURL={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            title={film.original_title}
            movieYear={film.release_date}
          />
        ))}
      </ul>
    </section>
  );
}

export default MovieList;
