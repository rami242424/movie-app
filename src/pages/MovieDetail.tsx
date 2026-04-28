import { useParams } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";

function MovieDetail(){
    const { id } = useParams();
    const {fetchState} = useMovieDetail(id ?? "");
    return(
        <>
            {fetchState.status === "loading" && <div>Loading...</div>}
            {fetchState.status === "success" && (
                <>
                    <h3>{fetchState.data.title}</h3>
                    <img src={`https://image.tmdb.org/t/p/w300/${fetchState.data.poster_path}`}/>
                </>
            )}
        </>
    );
}

export default MovieDetail;