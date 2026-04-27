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
    <>
      <input 
        placeholder="영화이름을 검색하세요." 
        value={keyword}
        onChange={inputChange}
        onKeyDown={(e) => {if((e.key) === "Enter") searchBtn()}}
      />
      <button
        onClick={searchBtn}
      >
        Search
      </button>
    </>
  );
}

export default SearchBar;