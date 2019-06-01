import React from 'react';
import { GlobalStyle } from 'styles';
import { Nav, Footer } from 'components';
import { StyledContent } from './layout.style';

const Layout = props => (
  <React.Fragment>
    <GlobalStyle />
    <Nav />
    <StyledContent>{props.children}</StyledContent>
    <Footer />
  </React.Fragment>
);

export default Layout;
