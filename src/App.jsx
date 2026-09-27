import { useState } from "react"
import { useMovieStore } from "./store/movieStore"

function App() {

  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);

  const movies = useMovieStore((state) => state.movies);
  const addMovieHandler = useMovieStore((state) => state.addMovie);

  return <div>
    <input type="text" placeholder="Enter movie name" value={title} onChange={(e) => setTitle(e.target.value)} />
    <br />
    <input type="number" placeholder="Enter rating" value={rating} onChange={(e) => setRating(e.target.value)} />
    <br />

    <button onClick={() => addMovieHandler(title, rating)}>Add Movie</button>

    <h1>List:</h1>
    {movies.map((movie) => {
      return <ul>Title:{movie.title} Rating:{movie.rating}</ul>
    })}
  </div>
}

export default App;