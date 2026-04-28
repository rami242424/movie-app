import { useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { useMovies } from "../hooks/useMovies";

function Home(){
    const [keyword, setKeyword] = useState("");
    const {searchBtn, fetchState, getSortedMovies, filter, setFilter} = useMovies(keyword);
    return(
        <div className="min-h-screen bg-[#141414] flex flex-col items-center py-10">
            <div className="w-full max-w-3xl">
                <SearchBar 
                    keyword={keyword}
                    setKeyword={setKeyword}
                    searchBtn={searchBtn} 
                />
                { fetchState.status === "success" &&
                <div className="flex justify-end gap-2 m-7">   
                    <button 
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === "default" ? "bg-[#E50914] text-white" : "bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]"}`} 
                        onClick={() => setFilter("default")}
                    >
                        전체
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === "release" ? "bg-[#E50914] text-white" : "bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]"}`}
                        onClick={() => setFilter("release")}
                    >
                        최신순
                    </button>
                    <button 
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === "rating" ? "bg-[#E50914] text-white" : "bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]"}`}
                        onClick={() => setFilter("rating")}
                    >
                        별점순
                    </button>
                </div>
                }
                {fetchState.status === "loading" && <MovieList movies={[]} isLoading={true}/>}
                {fetchState.status === "error" && <div className="text-red-400 text-center py-20 text-lg">{fetchState.error}</div>}
                {fetchState.status === "success" && (
                    getSortedMovies().length > 0 
                    ? (
                    <MovieList movies={getSortedMovies()}/>
                    ) : <div className="text-gray-400 text-center py-20 text-lg">검색결과가 없습니다.</div>
                    )
                }
            </div>
        </div>    
    );  
}

export default Home; 