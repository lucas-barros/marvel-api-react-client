import React from 'react';
import styled from 'styled-components';
import { pxToRem } from 'styles';

const Styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${pxToRem(100)};
  background: #e92227;
  a {
    text-decoration: none;
    color: #fff;
  }
`;

const Footer = () => (
  <Styled>
    <a href="http://marvel.com">Data provided by Marvel. © 2019 MARVEL</a>
  </Styled>
);

export default Footer;
