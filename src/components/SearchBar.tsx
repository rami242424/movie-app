interface ISearchProps{
  setKeyword: (value:string) => void;
  SearchBtn: () => void;
  keyword: string;
}

function SearchBar({setKeyword, SearchBtn, keyword}:ISearchProps){
  const SearchInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }
  return(
    <div className="flex gap-2 mb-6 max-w-md mx-auto">
      <input
        className="flex-1 p-2 border border-gray-300 rounded"
        onKeyDown={(e) => {if(e.key === "Enter") SearchBtn()}}
        onChange={SearchInputChange}
        value={keyword}
        placeholder="영화를 검색해주세요."
      />
      <button
        className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500 text-white"
        onClick={SearchBtn}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
