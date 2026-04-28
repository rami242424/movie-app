import { useParams } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";

function MovieDetail(){
    const { id } = useParams();
    const {fetchState} = useMovieDetail(id ?? "");
    return(
        <>
            {fetchState.status === "success" && <div>{fetchState.data.title}</div>}
        </>
    );
}

export default MovieDetail;