import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Hone() {
    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        { id: 1, title: "The Shawshank Redemption", year: 1994 },
        { id: 2, title: "The Godfather", year: 1972 },
        { id: 3, title: "The Godfather: Part II", year: 1974 },
        { id: 4, title: "Dark Knight", year: 2008 },
        { id: 5, title: "Matrix", year: 1999 },
    ]
    function handleSearch(e) {
        e.preventDefault()
        alert(searchQuery)
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text"
                placeholder="Search movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>


        <div className="movies-grid">
            {movies.map(
                (movie) =>
                    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
        </div>
    </div>
}

export default Hone