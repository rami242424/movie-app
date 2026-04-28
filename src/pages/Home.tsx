import { useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { useMovies } from "../hooks/useMovies";

function Home(){
    const [keyword, setKeyword] = useState("");
    const {searchBtn, fetchState} = useMovies(keyword);
    return(
        <>
            <SearchBar 
                keyword={keyword}
                setKeyword={setKeyword}
                searchBtn={searchBtn}
            />
            {fetchState.status === "loading" && <div>Loading...</div>}
            {fetchState.status === "error" && <div>{fetchState.error}</div>}
            {fetchState.status === "success" && (
                fetchState.data.length > 0 
                ? (
                <MovieList movies={fetchState.data}/>
                ) : <div>검색결과가 없습니다.</div>
                )
            }
        </>
    );
}

export default Home; 