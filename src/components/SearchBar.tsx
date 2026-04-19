import type { Status } from "../types/movie";


interface ISearchProps {
  keyword: string;
  setKeyword: (value:string) => void;
  handleSearch: () => void;
  status: Status;
}

function SearchBar({keyword, setKeyword, handleSearch, status}:ISearchProps){
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }
  return(
    <div>
      <input 
        value={keyword} 
        placeholder="영화제목을 검색하세요." 
        onChange={handleChange}
        onKeyDown={(e) => {
          if(e.key === "Enter")  handleSearch();
        }}
      
      />
      <button 
        onClick={handleSearch}
        disabled={status === "loading"}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar