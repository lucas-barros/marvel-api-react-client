import React from 'react';
import styled from 'styled-components';
import { GlobalStyle, pxToRem } from 'styles';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

const StyledContent = styled.div`
  padding-bottom: ${pxToRem(60)};
  min-height: calc(100vh - ${pxToRem(100 + 60)});
`;

const Layout = props => (
  <React.Fragment>
    <GlobalStyle />
    <Nav />
    <StyledContent>{props.children}</StyledContent>
    <Footer />
  </React.Fragment>
);

export default Layout;
