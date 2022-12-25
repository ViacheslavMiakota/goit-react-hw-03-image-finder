import React from 'react';
import { LoadMoreButton } from 'components/Button/Button.styled';

const Button = ({ loadMoreProp }) => {
  return (
    <LoadMoreButton type="button" onClick={loadMoreProp}>
      Load more
    </LoadMoreButton>
  );
};
export default Button;
