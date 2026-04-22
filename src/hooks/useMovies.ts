import { useState } from "react";
import type { FetchState, MoviesResponse } from "../types/movie";

export const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export function useMovies(keyword : string){
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
    return { fetchState, SearchBtn };
}

