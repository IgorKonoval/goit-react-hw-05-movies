import React from 'react';
import { SearchButton, SearchForm, SearchInput } from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

const Searchbar = ({ onSubmit, value, onChange }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput
        name="searchMovie"
        type="text"
        id="search"
        placeholder="Search movie"
        value={value}
        onChange={onChange}
      />
      <SearchButton>
        <FcSearch size="30px" />
      </SearchButton>
    </SearchForm>
  );
};

export default Searchbar;
