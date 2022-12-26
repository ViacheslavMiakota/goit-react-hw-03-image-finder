import React from 'react';
import PropTypes from 'prop-types';
import { Dna } from 'react-loader-spinner';

const Loader = isLoading => {
  return (
    <Dna
      visible={Boolean(isLoading)}
      height="480"
      width="480"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};
export default Loader;

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
