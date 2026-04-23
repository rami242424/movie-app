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
        className="flex-1 p-2 border bg-[#141414] border-gray-400 rounded text-white placeholder:text-gray-400"
        onKeyDown={(e) => {if(e.key === "Enter") SearchBtn()}}
        onChange={SearchInputChange}
        value={keyword}
        placeholder="영화를 검색해주세요."
      />
      <button
        className="px-4 py-2 bg-[#f3020e] rounded hover:bg-[#ce101a] text-white"
        onClick={SearchBtn}
      >
        Search
      </button> 
    </div>
  );
}

export default SearchBar;
