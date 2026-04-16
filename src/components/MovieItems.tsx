import type { IProps } from "../App";

interface IMovieItemsProps{
    movie: IProps
}

function MovieItems({movie}:IMovieItemsProps){
    return(
        <>  
            <li className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col">
                <div>
                    {movie.poster_path && (
                        <img 
                            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            className="w-full h-[300px] object-cover object-top rounded-lg"
                        />
                    )}
                </div>
                <div className="mt-3 flex flex-col gap-2">
                    <h4 className="font-semibold text-lg leading-tight">
                        {movie.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                        Summary : {movie.overview}
                    </p>
                    <p className="mt-auto flex items-center gap-1 text-yellow-500 font-medium">
                        🌟{movie.vote_average}
                    </p>
                </div>
            </li>
        </>
    );
}

export default MovieItems;