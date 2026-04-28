import { useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { useMovies } from "../hooks/useMovies";

function Home(){
    const [keyword, setKeyword] = useState("");
    const {searchBtn, fetchState, getSortedMovies, setFilter} = useMovies(keyword);
    return(
        <>
            <SearchBar 
                keyword={keyword}
                setKeyword={setKeyword}
                searchBtn={searchBtn}
            />
            { fetchState.status === "success" &&
            <div>   
                <button onClick={() => setFilter("default")}>전체</button>
                <button onClick={() => setFilter("release")}>최신순</button>
                <button onClick={() => setFilter("rating")}>별점순</button>
            </div>
            }
            {fetchState.status === "loading" && <MovieList movies={[]} isLoading={true}/>}
            {fetchState.status === "error" && <div>{fetchState.error}</div>}
            {fetchState.status === "success" && (
                getSortedMovies().length > 0 
                ? (
                <MovieList movies={getSortedMovies()}/>
                ) : <div>검색결과가 없습니다.</div>
                )
            }
        </>
    );
}

export default Home; 