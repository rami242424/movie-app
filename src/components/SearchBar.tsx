interface ISearchProps {
  keyword: string;
  setKeyword: (value:string) => void;
  handleSearch: () => void;
}

function SearchBar({keyword, setKeyword, handleSearch}:ISearchProps){
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
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar