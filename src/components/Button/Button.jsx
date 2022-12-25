import React from 'react';

const Button = ({ loadMoreProp }) => {
  return (
    <button type="button" onClick={loadMoreProp}>
      Load more
    </button>
  );
};
export default Button;
