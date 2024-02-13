import { useEffect, useState } from "react";
import MovieCard from "../Componentes/MovieCard.tsx";
import Filter from "../Componentes/Filter.tsx";
import SortBy from "../Componentes/SortBy.tsx";
import { useNavigate } from "react-router-dom";

function MovieHome() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState(null);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const navigate = useNavigate();

  const getMovies = () => {
    const url =
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&without_genres=35,80,99,18,10751,36,10402,10749,10770,37&primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-12-31&page=1&sort_by=${sortBy}&${genre ? `with_genres=${genre}` : ''}`;
    
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
  }, [genre, sortBy]);

  const getAllMovies = () => {
    getMovies().then((movies) => {
      const filteredMovies = movies.filter(movie =>{
        return true;
      });
      console.log("Array de películas:", movies);
      setMovies(filteredMovies);
    });
  };

  // Función para manejar el cambio de género
  const handleGenreChange = (selectedGenre) => {
    setGenre(selectedGenre);
  };

  // Función para manejar el cambio de orden de clasificación
  const handleSortByChange = (selectedSortBy) => {
    setSortBy(selectedSortBy);
  };

  //Función para manejar el click en las targetas
  const handleMovieClick = (film) =>{
    navigate (`/movie-detail/${film.id}`)
    console.log (film.id)
  }

  return (
    <section className="movie">
      <h1 className="movie-title">SCI-FI MOVIES</h1>
      <div className="div-filtros">
        <Filter onGenreChange={handleGenreChange} />
        <SortBy onSortByChange={handleSortByChange} />
      </div>
      <div className="movie-list-container">
        {movies.map((film) => (
          <MovieCard
            onClick={ () => handleMovieClick (film)}
            key={film.id}
            imageURL={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            title={film.title}
            movieYear={film.release_date}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieHome;
