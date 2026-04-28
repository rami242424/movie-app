import { useEffect, useState } from "react";
import type { DetailFetchState } from "../types/movie";
import { API_TOKEN } from "./useMovies";

export function useMovieDetail(id:string){
    const [fetchState, setFetchState] = useState<DetailFetchState>({status:"idle"});
    useEffect(() => {
        const detailFetch = async() => {
            try{
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`,
                    {
                        headers: {
                        Authorization: `Bearer ${API_TOKEN}`
                        }
                    }
                );
                if(!response.ok) throw new Error("API 요청 실패");
                const json = await response.json();
                setFetchState({
                    status: "success",
                    data: json
                });
            } catch(error){
                if(error instanceof Error){
                    setFetchState({ status: "error", error: error.message });
                }
            }
        }
        detailFetch()
    }, [id]);
    return {fetchState}
}