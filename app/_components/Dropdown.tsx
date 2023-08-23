export default function Dropdown({
  searchType,
  handleSearchTypeChange,
}: {
  searchType: string;
  handleSearchTypeChange: any; // temp type
}) {
  return (
    <div className="dropdown">
      <label htmlFor="searchType">Search via: </label>

      <select
        name="searchType"
        id="searchType"
        value={searchType}
        onChange={(e) => handleSearchTypeChange(e.target.value)}
      >
        <option value="titles">Titles</option>
        <option value="developers">Developers</option>
        <option value="platforms">Platforms</option>
      </select>
    </div>
  );
}
