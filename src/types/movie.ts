export type IMovies = {
    id: number;
    poster_path: string| null;
    overview: string;
    vote_average: number;
    title: string;
    release_date: string;
}

export interface MoviesResponse {
    page: number;
    results: IMovies[];
    total_pages: number;
    total_results: number;
}

export type Status = "idle" | "loading" | "success" | "error";