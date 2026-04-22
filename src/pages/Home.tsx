import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";


function Home(){
    const [keyword, setKeyword] = useState("");
    const { fetchState, SearchBtn, sortedMovies, filter, setFilter} = useMovies(keyword);
    return(
        <div className="min-h-screen bg-[#141414] flex flex-col items-center py-10">
            <div className="w-full max-w-3xl">
                <SearchBar 
                    setKeyword={setKeyword}
                    SearchBtn={SearchBtn}
                    keyword={keyword}
                />
                <div className="flex gap-2 mb-4">
                <button 
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === "default" ? "bg-[#E50914] text-white" : "bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]"}`}
                    onClick={() => setFilter("default")}>전체</button>
                <button 
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === "release" ? "bg-[#E50914] text-white" : "bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]"}`}
                    onClick={() => setFilter("release")}>최신순</button>
                <button 
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === "rating" ? "bg-[#E50914] text-white" : "bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]"}`}
                    onClick={() => setFilter("rating")}>평점순</button>
            </div>

            {fetchState.status === "loading" && (
                <MovieList movies={[]} isLoading={true}/>
            )}
            {fetchState.status === "error" && (
                <div className="text-red-400 text-center py-20 text-lg">{fetchState.error}</div>
            )}
            {fetchState.status === "success" && (
                fetchState.data.length > 0 
                ? (
                <MovieList movies={sortedMovies}/>
                ) : (
                <div  className="text-gray-400 text-center py-20 text-lg">검색된 결과가 없습니다.</div>
                )
            )}
            </div>
        </div>
    );
}

export default Home;