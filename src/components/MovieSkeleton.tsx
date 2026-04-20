function MovieSkeleton() {
  return (
    <li className="bg-white rounded shadow p-3 flex flex-col gap-2 animate-pulse">
      <div className="w-full aspect-2/3 bg-gray-200 rounded" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-1/4" />
      <div className="h-3 bg-gray-200 rounded" />
      <div className="h-3 bg-gray-200 rounded" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
    </li>
  );
}

export default MovieSkeleton;