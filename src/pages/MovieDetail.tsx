import { useNavigate, useParams } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";

function MovieDetail(){
    const navigate = useNavigate();
    const { id } = useParams<{id:string}>();
    const { fetchState } = useMovieDetail(id ?? "");
    if(!id) return null;
    
    return (
    <div className="min-h-screen bg-[#141414] text-white py-10 px-6">
        <button 
            className="mb-6 px-4 py-2 bg-[#2a2a2a] text-gray-400 rounded-full hover:bg-[#3a3a3a] transition-colors"
            onClick={() => navigate(-1)}
        >
            ← 뒤로가기
        </button>
        {fetchState.status === "loading" && (
            <div className="text-center text-gray-400 py-20 text-lg">Loading...</div>
        )}
        {fetchState.status === "error" && (
            <div className="text-red-400 text-center py-20 text-lg">{fetchState.error}</div>
        )}
        {fetchState.status === "success" && (
            <div className="max-w-3xl mx-auto flex gap-8">
                <img 
                    className="w-64 rounded-lg object-cover flex-shrink-0"
                    src={`https://image.tmdb.org/t/p/w500/${fetchState.data[0].poster_path}`} 
                    alt={fetchState.data[0].title}
                />
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">{fetchState.data[0].title}</h1>
                    <p className="text-gray-400 text-sm">{fetchState.data[0].release_date}</p>
                    <p className="text-yellow-400">🌟{fetchState.data[0].vote_average}</p>
                    <p className="text-gray-300 leading-relaxed">{fetchState.data[0].overview}</p>
                </div>
            </div>
        )}
    </div>  
);
}

export default MovieDetail;

