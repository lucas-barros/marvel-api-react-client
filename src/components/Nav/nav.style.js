import styled from 'styled-components';
import { pxToRem } from 'styles';

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${pxToRem(60)};
  background: black;
  box-shadow: 0 8px 6px -6px #000;
  img {
    height: 100%;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;


export { StyledNav };
