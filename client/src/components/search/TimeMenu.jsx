import React, { useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Form = styled(FormControl)`
  width: 100px;
`;

const Label = styled(InputLabel)``;

const Selected = styled(Select)``;

const Item = styled(MenuItem)``;

const decades = ['1800', '1810', '1820', '1830', '1840', '1850', '1860', '1870', '1880', '1890'];

function TimeMenu(props) {
  const { time, setTime } = props;
  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <div>
      <Form variant="standard">
        <Label>Decade</Label>
        <Selected
          value={time}
          onChange={handleChange}
          required
        >
          {decades.map((decade) => <Item value={decade} key={decade}>{decade}</Item>)}
        </Selected>
      </Form>
    </div>
  );
}

export default TimeMenu;
