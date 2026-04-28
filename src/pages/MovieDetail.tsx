import { useParams } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";

function MovieDetail(){
    const { id } = useParams();
    const {fetchState, setFetchState} = useMovieDetail("id");
    return(
        <>
            {fetchState.status === "success" && <div>{setFetchState}</div>}
        </>
    );
}

export default MovieDetail;