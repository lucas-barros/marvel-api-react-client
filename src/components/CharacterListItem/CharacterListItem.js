import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styled = styled.div`
  background-color: #fff;

  img {
    width: 100%;
  }

  > a {
    color: inherit;
    text-decoration: none;
  }
`;
const CharactersListItem = ({ id, name, description, thumbnail }) => (
  <Styled>
    <Link
      to={{
        pathname: '/details',
        state: { id }
      }}
    >
      <h1>{name}</h1>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`${name} thumbnail`} />
      <p>{description}</p>
    </Link>
  </Styled>
);

export default CharactersListItem;
