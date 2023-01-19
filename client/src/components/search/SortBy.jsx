import React, { useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SortContainer = styled.div`
`;
const Form = styled(FormControl)`
  width: 150px;
  font-family: 'Jost' !important;
  margin: 5px;
`;

const Label = styled(InputLabel)``;

const Selected = styled(Select)``;

const Item = styled(MenuItem)``;

const options = [['Artist', 'artist'], ['Fields Populated', 'fields_populated']];

function SortBy(props) {
  const { sort, setSort } = props;
  const handleChange = (event) => setSort(event.target.value);

  return (
    <SortContainer>
      <Form variant="standard">
        <Label>Sort By</Label>
        <Selected
          value={sort}
          onChange={handleChange}
        >
          {options.map((option) => <Item value={option[1]} key={option[1]}>{option[0]}</Item>)}
        </Selected>
      </Form>
    </SortContainer>
  );
}

export default SortBy;
