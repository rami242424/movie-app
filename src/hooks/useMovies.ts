import { useState } from "react";
import type { IMovies, MoviesResponse, Status } from "../types/movie";

const API_KEY = import.meta.env.VITE_API_KEY;

export function useMovies(){
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<string|null>(null);
    const [movies, setMovies] = useState<IMovies[]>([]);
    
    const handleSearch = async(keyword:string) => {
    if(!keyword.trim()) return;
    setStatus("loading");
    setError(null);
    
    try{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}&api_key=${API_KEY}`);
        if(!response.ok) throw new Error ("API 연결 실패");

        const json :MoviesResponse = await response.json();
        if (!json || !Array.isArray(json.results)) {
            throw new Error("잘못된 응답 구조");
        }
        setMovies(json.results);
        setStatus("success")

    } catch(error){
        setStatus("error");
        setError(error instanceof Error? error.message : "알 수 없는 에러");
    } 
    }
    return { movies, status, error, handleSearch };
}

export default useMovies