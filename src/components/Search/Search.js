import React from 'react';
import { StyledSearch } from './search.style';

const Search = ({ value, onChange }) => (
  <StyledSearch>
    <input name="hero" placeholder="Search characters" type="text" value={value} onChange={onChange} />
  </StyledSearch>
);
export default Search;
