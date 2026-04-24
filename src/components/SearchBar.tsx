
interface ISearchBar {
  setKeyword: (value:string) => void;
  keyword: string;
  handleSearchBtn: () => void;
} 

function SearchBar({setKeyword, keyword, handleSearchBtn}:ISearchBar){
  const searchInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }
  return(
    <>
      <input 
        onKeyDown={(e) => e.key === "Enter" && handleSearchBtn()} 
        value={keyword} 
        placeholder="영화 제목을 검색해주세요." 
        onChange={searchInputChange}/>
      <button onClick={handleSearchBtn}>Search</button>
    </>
  );
}

export default SearchBar;