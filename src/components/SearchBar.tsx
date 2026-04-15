import type React from "react";

export interface Props {
  movieKeyword: string;
  setMovieKeyword: (value: string) => void;
  handleSearch: () => void;
}

function SearchBar({ movieKeyword, setMovieKeyword, handleSearch }: Props) {
  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieKeyword(e.target.value);
  };

  return (
    <div className="flex justify-center gap-2 p-4">
      <input
        value={movieKeyword}
        onChange={handleKeywordChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        placeholder="영화를 검색하세요..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;