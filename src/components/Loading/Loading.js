import React from 'react';
import { Loading as LoadingImg } from 'img';
import { StyledLoading } from './loading.style';

const Loading = () => (
  <StyledLoading>
    <img src={LoadingImg} alt="Loading icon" />
  </StyledLoading>
);

export default Loading;
