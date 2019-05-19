import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { media, pxToRem } from 'styles';
import Loading from 'components/Loading/Loading';
import CharacterListItem from '../CharacterListItem/CharacterListItem';

const Styled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    padding: ${pxToRem(20)};
    padding-top: 0;
    margin: ${pxToRem(10)};
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    flex: 0 0 94%;
    ${media.sm`flex: 0 0 45%;`}
    ${media.md`flex: 0 0 30%;`}
    ${media.lg`flex: 0 0 23%;`}
  }
`;

const CharacterList = ({ characters = [], loading }) => {
  if (loading) {
    return <Loading />;
  }

  if (!characters.length) {
    return 'no heros';
  }

  return (
    <Styled>
      {characters.map(character => (
        <CharacterListItem key={character.id} {...character} />
      ))}
    </Styled>
  );
};

const mapStateToProps = ({ characterState }) => ({
  characters: characterState.response && characterState.response.data.results,
  loading: characterState.loading
});

export default connect(mapStateToProps)(CharacterList);
