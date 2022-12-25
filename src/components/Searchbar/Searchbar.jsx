import React from 'react';
import {
  Button,
  SearchForm,
  SearchBarHeader,
  SearchForInput,
} from 'components/Searchbar/Searchbar.styled';

const Searchbar = ({ handleSubmit }) => {
  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleSubmit}>
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
