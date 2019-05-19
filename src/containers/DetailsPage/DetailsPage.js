import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { media, pxToRem } from 'styles';

const Styled = styled.div`
  padding: ${pxToRem(20)};
  img {
    width: 100%;
    ${media.sm`width: 300px;`}
  }
`;

const StyledEdit = styled.div`
  input {
    padding: ${pxToRem(8)} ${pxToRem(15)};
  }
  button {
    background-color: #ea2328;
    color: #fff;
    border: 0;
    padding: ${pxToRem(10)} ${pxToRem(30)};
    margin-left: ${pxToRem(30)};
    outline: none;
    cursor: pointer;
  }
`;

const saveNewName = (id, name) => localStorage.setItem(`${id}_name`, name);

const getNewName = id => localStorage.getItem(`${id}_name`);

const EditNameForm = ({ id, name }) => {
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState(name);
  const input = editMode ? (
    <input type="text" placeholder="New name" onChange={e => setNewName(e.target.value)} />
  ) : (
    ''
  );

  useEffect(() => {
    const newName = getNewName(id);
    if (newName) {
      setNewName(newName);
    }
  }, []);

  const onClick = () => {
    if (editMode) {
      saveNewName(id, newName);
    }
    setEditMode(!editMode);
  };

  return (
    <StyledEdit>
      {input || newName}
      <button type="button" onClick={onClick}>
        {editMode ? 'Salvar' : 'Editar'}
      </button>
    </StyledEdit>
  );
};

const DetailsPage = ({ characters = [], location }) => {
  const id = location.state && location.state.id;
  const character = characters.find(character => character.id === id);

  if (!character) {
    return <Redirect to="/" />;
  }

  const { name, description, thumbnail, series } = character;

  return (
    <Styled>
      <h1>
        <EditNameForm name={name} id={id} />
      </h1>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`${name} thumbnail`} />
      <p> {description}</p>
      <h4>Series</h4>
      <ul>
        {series.items.map(serie => (
          <li key={serie.resourceURI}>{serie.name}</li>
        ))}
      </ul>
    </Styled>
  );
};

const mapStateToProps = ({ characterState }) => {
  const characters = characterState.response && characterState.response.data.results;

  return {
    characters
  };
};

export default connect(mapStateToProps)(withRouter(DetailsPage));
