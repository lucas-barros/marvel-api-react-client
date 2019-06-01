import styled from 'styled-components';
import { pxToRem } from 'styles';

const StyledContent = styled.div`
  padding: ${pxToRem(30)} ${pxToRem(15)};
  min-height: calc(100vh - ${pxToRem(100 + 60)});
`;

export { StyledContent };
