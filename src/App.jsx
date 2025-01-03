import {useEffect, useState} from "react";
import {Form} from "./components/Form/Form";
import {ContainerMovies} from "./components/ContainerMovie/containermovies-styles";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const API_KEY = "914d0a25";
  const URL_BASE = "http://www.omdbapi.com/?apikey=";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${URL_BASE}${API_KEY}&s=${searchTerm}`);
        const data = await response.json();
        setMovies(data.Search || []);
      } catch (error) {
        console.error("Error al obtener las peliculas", error);
      }
    };
    fetchMovies();
  }, [searchTerm]);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <>
      <Form onSearch={handleSearch} />
      <ContainerMovies>
        <h2>Resultados</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <p>{movie.Title}</p>
              <img src={movie.Poster} alt={movie.Title} />
              <p> {movie.Year}</p>
            </li>
          ))}
        </ul>
      </ContainerMovies>
    </>
  );
}

export default App;
