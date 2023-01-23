import React, { useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Form = styled(FormControl)`
  width: 100px;
  margin: 5px;
`;

const Label = styled(InputLabel)``;

const Selected = styled(Select)``;

const Item = styled(MenuItem)``;

const countries = ['Afghanistan', 'Brazil', 'Britain', 'Canada', 'France', 'Germany', 'Italy', 'Mexico', 'Russia', 'United States'];

function PlaceMenu(props) {
  const { place, setPlace } = props;
  const handleChange = (event) => {
    setPlace(event.target.value);
  };

  return (
    <div>
      <Form variant="standard">
        <Label>Location</Label>
        <Selected
          value={place}
          onChange={handleChange}
        >
          {countries.map((country) => <Item value={country} key={country}>{country}</Item>)}
        </Selected>
      </Form>
    </div>
  );
}

export default PlaceMenu;
