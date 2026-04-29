import { useParams } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";

function MovieDetail(){
    const { id } = useParams();    
    const {fetchState} = useMovieDetail(id ?? "");
    return(
        <>
            {fetchState.status === "success" && (
                <>
                    <img src={`https://image.tmdb.org/t/p/w300/${fetchState.data.poster_path}`}/>
                    <h3>{fetchState.data.title}</h3>
                </>
            )
            }
        </>
    );
}

export default MovieDetail