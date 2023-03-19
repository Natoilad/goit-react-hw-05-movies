import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Button } from './SearchInput.styled';

export const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const changeQuery = evt => {
    setQuery(evt.target.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      return alert('Please enter search movies');
    }
    onSearch(query);
    setQuery('');
  };
  return (
    <div>
      <form
        style={{
          paddingTop: 20,
          paddingBottom: 20,
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter search movie"
          name="query"
          value={query}
          onChange={changeQuery}
        />
        <Button type="submit">
          <AiOutlineSearch size="13" />
        </Button>
      </form>
    </div>
  );
};
export default SearchInput;
