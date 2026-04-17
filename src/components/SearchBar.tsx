import type { Status } from "../App";

interface ISearchBarProps {
  keyword: string;
  setKeyword: (value:string) => void;
  handleSearch: () => void;
  status: Status;
}

function SearchBar({keyword, handleSearch, setKeyword, status}:ISearchBarProps){
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }

  return (
    <>
      <input 
        value={keyword} 
        placeholder="영화 제목을 검색하세요." 
        onChange={handleChange}
        onKeyDown={(e) => {
          if(e.key === "Enter") handleSearch();
        }}
      />
      <button onClick={handleSearch} disabled={status === "loading"}>Search</button>
    </>
  );
}
export default SearchBar;