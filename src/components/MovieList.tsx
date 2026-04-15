import type { Movie } from "../types/movie";

type Status = "idle" | "loading" | "success" | "error";

function MovieList({
  movie,
  status,
  error,
}: {
  movie: Movie[];
  status: Status;
  error: string | null;
}) {
  if (status === "idle") return null;

  if (status === "loading")
    return <p className="text-center mt-10">Loading...</p>;

  if (status === "error")
    return (
      <p className="text-center mt-10 text-red-500">
        {error}
      </p>
    );

  if (movie.length === 0)
    return <p className="text-center mt-10">No movies found.</p>;

  return (
    <div className="p-4">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movie.map((m) => (
          <li
            key={m.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* 이미지 */}
            {m.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
                alt={m.title}
                className="w-full h-[220px] object-cover"
              />
            ) : (
              <div className="w-full h-[220px] flex items-center justify-center bg-gray-200">
                No Image
              </div>
            )}

            {/* 텍스트 */}
            <div className="p-3">
              <h3 className="font-bold text-base line-clamp-1">
                {m.title}
              </h3>

              <p className="text-xs text-gray-500">
                {m.release_date}
              </p>

              <p className="text-xs mt-1 line-clamp-2 text-gray-700">
                {m.overview}
              </p>

              <div className="mt-2 text-sm font-semibold">
                ⭐ {m.vote_average.toFixed(1)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;