import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { StyledDetails } from './details.style';

const Details = ({ characters, location }) => {
  const id = location.state && location.state.id;
  const character = characters.find(character => character.id === id);

  if (!character) {
    return <Redirect to="/" />;
  }

  const { name, description, thumbnail, series } = character;

  return (
    <StyledDetails>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`${name} thumbnail`} />
      <p> {description}</p>
      <h4>Series</h4>
      <ul>
        {series.items.map(serie => (
          <li key={serie.resourceURI}>{serie.name}</li>
        ))}
      </ul>
    </StyledDetails>
  );
};

const mapStateToProps = ({ characterState }) => ({
  characters: characterState.characters
});

export default connect(mapStateToProps)(withRouter(Details));
