import { useState } from "react";
import type { FetchState, FilterType, MoviesResponse } from "../types/movie";

export const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export function useMovies(keyword : string){
    const [filter, setFilter] = useState<FilterType>("default");
    const [fetchState, setFetchState] = useState<FetchState>({status: "idle"});
    const SearchBtn = async() => {
        if(!keyword.trim()) return;
        setFetchState({status: "loading"});

        try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}`,
        {
            headers: {
            Authorization: `Bearer ${API_TOKEN}`
            }
        }
        );
        if(!response.ok) throw new Error("API 연결 실패");
        const json :MoviesResponse = await response.json();
        
        setFetchState({
            status: "success",
            data: json.results
        }); 
        } catch(error) {
        if(error instanceof Error){
            setFetchState({
            status: "error",
            error: error.message
            });
        }
        }
    }

    const getSortedMovies = () => {
        if(fetchState.status !== "success") return[];

        if(filter === "rating"){
            return [...fetchState.data].sort((a,b) => b.vote_average - a.vote_average)
        }

        if(filter === "release"){
            return [...fetchState.data].sort((a,b) => b.release_date.localeCompare(a.release_date))
        }

        return fetchState.data
    }

    const sortedMovies = getSortedMovies();
    return { fetchState, SearchBtn, filter, setFilter, sortedMovies };
}

