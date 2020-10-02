import React from 'react';
import { Search } from '@material-ui/icons'
import { InputAdornment } from '@material-ui/core';

import Input from './styles';
/* eslint-disable-next-line */
export interface SearchInputProps {}

export const SearchInput = (props: SearchInputProps) => {
  return (
    <Input
      fullWidth
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
      {...props}
    />
  );
};

export default SearchInput;
