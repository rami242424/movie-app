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
    <>
      <input 
        value={keyword}
        placeholder="영화이름을 검색하세요."
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if(e.key === "Enter") searchMovie();
        }}
      />
      <button
        onClick={searchMovie}
        // disabled
      >
        Search
      </button>
    </>
  );
}

export default SearchBar;