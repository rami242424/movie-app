import { useEffect, useState } from "react";
import type { DetailFetchState } from "../types/movie";

const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export function useMovieDetail(id:string){
    const [fetchState, setFetchState] = useState<DetailFetchState>({status:"idle"});
    useEffect(() => {
        const movieDetailFetch = async() => {
            try{
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`,
                    {
                        headers: {
                        Authorization: `Bearer ${API_TOKEN}`
                        }
                    }
                );
                if(!response.ok) throw new Error("API 연결 실패");
                const json = await response.json();
                setFetchState({status:"success", data:json.results})
            }catch(error){
                if(error instanceof Error){
                    setFetchState({status:"error", error:error.message});
                }
            }
        }
        movieDetailFetch()
    }, [id]);
    return {fetchState}
}