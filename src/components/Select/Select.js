import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Говядина', label: 'Говядина' },
  { value: 'Помидоры', label: 'Помидоры' },
  { value: 'Петрушка', label: 'Петрушка' },
  { value: 'Картофель', label: 'Картофель' },
];

const Selected = ({ handleChange, value }) => (
  <Select onChange={handleChange} value={value} options={options} />
);

export default Selected;
