import type { IProps } from "../App";

interface IMovieItemsProps{
    movie: IProps
}

function MovieItems({movie}:IMovieItemsProps){
    return(
        <>  
            <li>
                <h3>{movie.title} (개봉일 {movie.release_date})</h3>
                {/* <p>Original title ({movie.original_title})</p> */}
                {movie.poster_path && (
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>
                )}
                <p>
                    Summary : {
                    movie.overview.length > 180 ? (
                        movie.overview.slice(0, 180) + "..."
                    ):( movie.overview
                    )}
                </p>
                <p>🌟{movie.vote_average}</p>
            </li>
        </>
    );
}

export default MovieItems;