export type Movie = {
    id: number;
    poster_path: string;
    overview: string;
    vote_average: number;
    title: string;
    release_date: string;
}

function MovieList({movie}: {movie: Movie[]}){
    return(
        <>
            {movie.length === 0 ? (
                <p>No movies found.</p>
            ) : (
                <ul>
                    {movie.map((m) => (
                        <li key={m.id}>
                            <h3>{m.title}</h3>
                            <h4>{m.release_date}</h4>
                            <img src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}/>
                            <h5>{m.overview}</h5>
                            <span>⭐{m.vote_average}</span>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default MovieList;