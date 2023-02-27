import "./App.css";
import results from "./mocks/results.json";
import no_results from "./mocks/no_results.json";

function App() {
  const movies = results.Search;
  const hasMovies = movies?.length > 0;
  return (
    <div className="page">
      <h1>Movies</h1>
      <header>
        <form className="form">
          <input placeholder="Avenger, Star Wars" />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {hasMovies ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron peliculas para esta busqueda</p>
        )}
      </main>
    </div>
  );
}
// 5ebcfa3c
// http://www.omdbapi.com/?apikey=[5ebcfa3c]&s=

export default App;
