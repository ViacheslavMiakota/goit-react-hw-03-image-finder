import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  SearchForm,
  SearchBarHeader,
  SearchForInput,
} from 'components/Searchbar/Searchbar.styled';

const Searchbar = ({ handleSubmit }) => {
  const onSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    if (!query) return;
    handleSubmit(query);
    event.target.reset();
  };
  return (
    <SearchBarHeader>
      <SearchForm onSubmit={onSubmit}>
        <Button type="submit">
          <span>Search</span>
        </Button>
        <SearchForInput
          type="text"
          name="query"
          placeholder="Search images and photos"
        ></SearchForInput>
      </SearchForm>
    </SearchBarHeader>
  );
};

export default Searchbar;
Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
