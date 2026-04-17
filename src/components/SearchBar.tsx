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
    <div className="flex justify-center mt-10 gap-2">
      <input
        className=" w-full max-w-xs px-3 py-2 border border-gray-400 rounded"
        value={keyword} 
        placeholder="영화 제목을 검색하세요." 
        onChange={handleChange}
        onKeyDown={(e) => {
          if(e.key === "Enter") handleSearch();
        }}
      />
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        onClick={handleSearch} 
        disabled={status === "loading"}
      >
        Search
      </button>
    </div>
  );
}
export default SearchBar;