import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  MovieDetail  from "./Paginas/MovieDetail.tsx";
import  Error  from "./Paginas/Error.tsx"
import MovieHome from "./Paginas/MovieHome.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieHome />} />
          <Route path="/movie-detail/:id" element={<MovieDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
