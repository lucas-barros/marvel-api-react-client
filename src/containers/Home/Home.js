import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCharacters } from 'redux/characters/actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterList from '../../components/CharacterList/CharacterList';

const Home = ({ getCharacters, characters }) => {
  useEffect(() => {
    if (!characters) {
      getCharacters();
    }
  }, []);

  return (
    <Fragment>
      <SearchBar onChange={e => getCharacters(e.target.value)} />
      <CharacterList />
    </Fragment>
  );
};

const mapDispatchToProps = {
  getCharacters
};

const mapStateToProps = ({ characterState }) => ({
  characters: characterState.response && characterState.response.data.results
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
