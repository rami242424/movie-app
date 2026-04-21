
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
    <>
      <input
        onKeyDown={(e) => {if(e.key === "Enter") SearchBtn()}}
        onChange={SearchInputChange}
        value={keyword}
        placeholder="영화를 검색해주세요."
      />
      <button
        onClick={SearchBtn}
      >
        Search
      </button>
    </>
  );
}

export default SearchBar;
