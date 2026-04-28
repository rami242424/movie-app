export type IMoviesProps = {
    id: number;
    poster_path: string| null;
    overview: string;
    vote_average: number;
    title: string;
    release_date: string;
}

export interface MoviesResponse { 
    page: number;
    results: IMoviesProps[]; 
    total_pages: number;
    total_results: number;
}

export type FetchState = 
    | {status: "idle"}
    | {status: "loading"}
    | {status: "success"; data: IMoviesProps[]}
    | {status: "error"; error: string};

export type DetailFetchState = 
    | {status: "idle"}
    | {status: "loading"}
    | {status: "success"; data: IMoviesProps}
    | {status: "error"; error: string};

export type FilterType = "default" | "release" | "rating"