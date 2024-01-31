import { useEffect, useState } from "react";
import SortBy from "./Componentes/SortBy.tsx";
import Filter from "./Componentes/Filter.tsx";
import MovieCard from "./Componentes/MovieCard.tsx";
import "./App.css";
import MovieList from "./Componentes/MovieList.tsx";

function App() {
  
  return (
    <>
      <h1 className="movie-title">SCI-FI MOVIES</h1>
      <>
        <>
          <SortBy />
        </>
        <>
          <Filter />
        </>
        <>
          <MovieList
          />
        </>
      </>
    </>
  );
}

export default App;
