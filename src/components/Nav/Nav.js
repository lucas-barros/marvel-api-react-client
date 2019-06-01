import React from 'react';
import { MarvelLogo } from 'img';
import { StyledNav } from './nav.style';

const Nav = () => (
  <StyledNav>
    <img src={MarvelLogo} alt="Marvel logo" />
  </StyledNav>
);

export default Nav;
