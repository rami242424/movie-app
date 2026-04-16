
interface ISearchProps {
  keyword : string;
  setKeyword: (value: string) => void;
  handleSearch: () => void;
  loading: boolean;
}

function SearchBar({keyword, handleSearch, setKeyword, loading}:ISearchProps){
  const handleKeywordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }
  return(
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSearch();
    }}>
      <input 
        value={keyword} 
        onChange={handleKeywordChange} 
        placeholder="영화 제목을 입력하세요."
        />
      <button type="submit" disabled={loading}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;