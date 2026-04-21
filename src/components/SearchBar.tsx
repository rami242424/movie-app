interface ISearchBarProps {
  keyword: string;
  setKeyword: (value:string) => void;
  searchMovie: () => void;
}

function SearchBar({keyword, setKeyword, searchMovie}:ISearchBarProps){
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }
  return(
    <div className="flex gap-2 mb-6 max-w-md mx-auto">
      <input 
        className="flex-1 p-2 border border-gray-300 rounded"
        value={keyword}
        placeholder="영화이름을 검색하세요."
        onChange={handleInputChange} 
        onKeyDown={(e) => {
          if(e.key === "Enter") searchMovie();
        }}
      />
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        onClick={searchMovie}
        // disabled
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;