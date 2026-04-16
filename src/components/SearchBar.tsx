
interface ISearchProps {
  keyword : string;
  setKeyword: (value: string) => void;
  handleSearch: () => void;
}

function SearchBar({keyword, handleSearch, setKeyword}:ISearchProps){
  const handleKeywordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }
  return(
    <>
      <input value={keyword} onChange={handleKeywordChange} placeholder="영화 제목을 입력하세요."/>
      <button onClick={handleSearch}>Search</button>
    </>
  );
}

export default SearchBar;