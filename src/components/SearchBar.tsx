interface ISearchBarProps {
  keyword: string;
  setKeyword: (value: string) => void;
  searchBtn: () => void;
}

function SearchBar({keyword, setKeyword, searchBtn}:ISearchBarProps){
  const inputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }
  return(
    <div className="flex gap-4 mb-6 max-w-md mx-auto">
      <input 
        className="flex-1 p-2 border bg-[#141414] border-gray-400 rounded text-white placeholder:text-gray-400"
        placeholder="영화이름을 검색하세요." 
        value={keyword}
        onChange={inputChange}
        onKeyDown={(e) => {if((e.key) === "Enter") searchBtn()}}
      />
      <button
        className="px-4 py-2 bg-[#E50914] rounded hover:bg-[#ce101a] text-white"
        onClick={searchBtn}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;