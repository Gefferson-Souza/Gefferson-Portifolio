const SearchBar = ({ onChange, value }) => {
  return (
    <div>
      <label htmlFor="search">Pesquise um país pelo nome oficial.</label>
      <input onChange={onChange} value={value} id="search" />
    </div>
  );
};

export default SearchBar;
