import { useState, useEffect } from "react";
import type { FetchState } from "../types/movie";
import { API_TOKEN } from "./useMovies";

export function useMovieDetail(id: string){
    const [fetchState, setFetchState] = useState<FetchState>({status: "idle"});

    useEffect(() => {
        const fetchDetail = async() => {
            setFetchState({status: "loading"});
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
                    headers: {
                        Authorization: `Bearer ${API_TOKEN}`
                    }
                });
                if(!response.ok) throw new Error("API 연결 실패");
                const json = await response.json();
                setFetchState({ status: "success", data: [json] });
            } catch(error) {
                if(error instanceof Error){
                    setFetchState({ status: "error", error: error.message });
                }
            } 
        }
        fetchDetail();
    }, [id]);

    return { fetchState };
}