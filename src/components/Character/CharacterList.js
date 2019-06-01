import React from 'react';
import { StyledCharacterList } from './character.style';
import CharacterListItem from './CharacterListItem';

const CharacterList = ({ characters }) => {
  if (!characters.length) {
    return 'no heros';
  }

  return (
    <StyledCharacterList>
      {characters.map(character => (
        <CharacterListItem key={character.id} {...character} />
      ))}
    </StyledCharacterList>
  );
};

export default CharacterList;
