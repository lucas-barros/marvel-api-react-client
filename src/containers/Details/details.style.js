import styled from 'styled-components';
import { media, pxToRem } from 'styles';

const StyledDetails = styled.div`
  padding: ${pxToRem(20)};
  img {
    width: 100%;
    ${media.sm`width: 300px;`}
  }
`;

export { StyledDetails };
