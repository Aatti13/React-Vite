const Search = ()=>{
  return (
    <div className="search">
      <input type="text" title="search" className="searchbar-bar" placeholder="Search" id="search"/>
      <button className="search-btn" id="search-btn">
        <img src="./images/general/search.png" alt="search" className="search-img"/>
      </button>
    </div>
  );
}

export default Search;