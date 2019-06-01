import styled from 'styled-components';
import { media, pxToRem } from 'styles';

const StyledSearch = styled.div`
  input {
    height: ${pxToRem(30)};
    width: 100%;
    ${media.md`width: 400px;`}
  }
`;

export { StyledSearch };
