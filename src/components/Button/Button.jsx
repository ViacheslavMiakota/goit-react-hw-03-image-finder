import React from 'react';
import PropTypes from 'prop-types';
import { LoadMoreButton } from 'components/Button/Button.styled';

const Button = ({ loadMoreProp }) => {
  return (
    <LoadMoreButton type="button" onClick={loadMoreProp}>
      Load more
    </LoadMoreButton>
  );
};
export default Button;

Button.propTypes = {
  loadMorePro: PropTypes.func,
};
