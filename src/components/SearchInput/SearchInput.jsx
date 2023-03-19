import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchInput = ({ onSearch }) => {
  console.log(`FUNC? ${onSearch}`);
  const [query, setQuery] = useState('');
  const changeQuery = evt => {
    setQuery(evt.target.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      return alert('Please enter search movies');
    }

    // console.log(query);
    onSearch(query);
    setQuery('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter search movie"
          name="query"
          value={query}
          onChange={changeQuery}
        />
        <button type="submit">
          <AiOutlineSearch size="10" />
        </button>
      </form>
    </div>
  );
};
export default SearchInput;
