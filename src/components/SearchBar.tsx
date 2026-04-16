
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
    <div className="flex justify-center mt-6">
      <form 
        className="flex gap-2 w-full max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          className="border rounded px-3 py-2 flex-1" 
          value={keyword} 
          onChange={handleKeywordChange} 
          placeholder="영화 제목을 입력하세요."
          />
        <button 
          className="bg-black text-white px-4 py-2 rounded"
          type="submit" 
          disabled={loading}
          >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;