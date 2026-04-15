
interface Props {
  movieKeyword: string,
  setMovieKeyword: (value:string) => void;
  handleSearch: () => void;
}

function SearchBar({movieKeyword, setMovieKeyword, handleSearch}:Props){
  const handleKeywordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setMovieKeyword(e.target.value);
  }
  return(
    <>
      <input value={movieKeyword} placeholder="영화 제목을 검색하세요." onChange={handleKeywordChange}/>
      <button onClick={handleSearch}>Search</button>
    </>
  );
}

export default SearchBar;