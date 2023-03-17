import { useState } from 'react';

export const SearchInput = ({ onSubmit }) => {
  console.log(`FUNC? ${onSubmit}`);
  const [query, setQuery] = useState('');
  const changeQuery = evt => {
    setQuery(evt.target.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      return alert('Please enter search movies');
    }
    // onSubmit(query);
    setQuery('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" value={query} onChange={changeQuery} />
        <button type="submit">search</button>
      </form>
    </div>
  );
};
export default SearchInput;
