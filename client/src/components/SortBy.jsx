import React, { useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Form = styled(FormControl)`
  width: 150px;
`;

const Label = styled(InputLabel)``;

const Selected = styled(Select)``;

const Item = styled(MenuItem)``;

const options = ['Relevant', 'Artist', 'Place', 'Date'];

function SortBy(props) {
  const { sort, setSort } = props;
  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div>
      <Form variant="standard">
        <Label>Sort By (default sorted by relevancy)</Label>
        <Selected
          value={sort}
          onChange={handleChange}
        >
          {options.map((option) => <Item value={option} key={option}>{option}</Item>)}
        </Selected>
      </Form>
    </div>
  );
}

export default SortBy;
