import React from 'react';
import {
  Button,
  SearchForm,
  SearchBar,
  SearchForInput,
} from 'components/Searchbar/Searchbar.styled';

const Searchbar = ({ handleSubmit }) => {
  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <Button type="submit">
          <span>Search</span>
        </Button>
        <SearchForInput
          type="text"
          usname="query"
          placeholder="Search images and photos"
        ></SearchForInput>
      </SearchForm>
    </SearchBar>
  );
};

export default Searchbar;
