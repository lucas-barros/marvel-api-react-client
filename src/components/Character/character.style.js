import styled from 'styled-components';
import { media, pxToRem } from 'styles';

const StyledCharacterList = styled.div`
  padding-top: ${pxToRem(30)};
  display: flex;
  flex-wrap: wrap;
  > div {
    margin: ${pxToRem(15)} ${pxToRem(10)};
    flex: 0 0 94%;
    ${media.sm`flex: 0 0 45%;`}
    ${media.md`flex: 0 0 30%;`}
    ${media.lg`flex: 0 0 23%;`}
  }
`;

const StyledCharacterItem = styled.div`
  background-color: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: ${pxToRem(20)};

  img {
    width: 100%;
  }

  > a {
    color: inherit;
    text-decoration: none;
  }
`;

export { StyledCharacterList, StyledCharacterItem };
