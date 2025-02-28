
function MovieCard({ movie }) {

    function onFavClick() {
        alert("clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favourite-btn" onClick={onFavClick}>
                    ♥
                </button>
            </div>
        </div>
    </div>
}

export default MovieCard