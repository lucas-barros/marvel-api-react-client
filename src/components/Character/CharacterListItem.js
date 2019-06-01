import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCharacterItem } from './character.style';


const CharactersListItem = ({ id, name, description, thumbnail }) => (
  <StyledCharacterItem>
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
  </StyledCharacterItem>
);

export default CharactersListItem;
