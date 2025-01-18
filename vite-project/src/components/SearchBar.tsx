import { useHelpContext } from '../state/context';

function SearchBar() {
  const { search, setSearch } = useHelpContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const val = e.target.value;

    setSearch(val);
  }
  return (
    <div className="searchBar">
      <label>find a location</label>
      <input
        name="search"
        type="search"
        placeholder="Search Destination"
        onChange={(e) => handleChange(e)}
        value={search}
      ></input>
    </div>
  );
}

export default SearchBar;
