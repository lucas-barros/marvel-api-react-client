import React from 'react';
import styled from 'styled-components';
import { media, pxToRem } from 'styles';
import SearchForm from '../SearchForm/SearchForm';

const StyledSearchBar = styled.div`
  padding: ${pxToRem(20)};

  input {
    height: ${pxToRem(30)};
    width: 100%;
    ${media.md`width: 400px;`}
  }
`;

const Field = ({ component, ...props }) => <input {...props} />;

const SearchBar = ({ onChange }) => (
  <StyledSearchBar>
    <Field
      name="searchform"
      placeholder="Buscar Personagens"
      component={SearchForm}
      type="text"
      onChange={onChange}
      data-testid="SearchBar"
    />
  </StyledSearchBar>
);
export default SearchBar;
