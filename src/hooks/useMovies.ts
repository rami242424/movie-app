// useMovies 데이터를 어떻게 가져올까
import { useState } from "react";
import type { FetchState } from "../types/movie";

const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export function useMovies(keyword:string){
    const [fetchState, setFetchState] = useState<FetchState>({status:"idle"});
    const handleSearchBtn = async() => {
    if(!keyword.trim()) return;

    setFetchState({status: "loading"});

    try{
        await new Promise(resolve => setTimeout(resolve, 3000));
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}`,
        {
            headers: {
            Authorization: `Bearer ${API_TOKEN}`
            }
        }
        );
        if(!response.ok) throw new Error("API  연결 실패");
        const json = await response.json();

        setFetchState({
        status: "success",
        data: json.results
        })

    }catch(error){
        if(error instanceof Error){
        setFetchState({
            status: "error",
            error: error.message
        })
        }
    }
    }
    return{ fetchState, handleSearchBtn }
} 