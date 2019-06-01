import React, { useState, useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { getCharacters } from 'redux/characters/actions';
import { CharacterList, Search } from 'components';
import { Loading } from 'components';

const Home = ({ getCharacters, characters, loading, pageInfo, name }) => {
  const [localName, setLocalName] = useState(name);
  const { limit, offset, hasMore } = pageInfo;

  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current && characters.length === 0) {
      mounted.current = true;
      getCharacters({ name: localName }); 
    } 
    else if (!mounted.current && characters.length > 0) {
      mounted.current = true;      
    } 
    else {
      getCharacters({ name: localName });
    }
  }, [localName]);

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={() => getCharacters({ name: localName, offset: offset + limit * 1 })}
      hasMore={characters.length && hasMore}
      loader={<Loading />}
    >
      <Search value={localName} onChange={e => setLocalName(e.target.value)} />
      {loading && !characters.length ? <Loading /> : <CharacterList characters={characters} />}
    </InfiniteScroll>
  );
};

const mapDispatchToProps = {
  getCharacters
};

const mapStateToProps = ({ characterState }) => {
  return {
    characters: characterState.characters,
    loading: characterState.loading,
    name: characterState.name,
    pageInfo: characterState.pageInfo
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
