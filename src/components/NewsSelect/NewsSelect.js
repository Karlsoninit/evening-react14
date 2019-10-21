import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'apple', label: 'apple' },
  { value: 'cars', label: 'cars' },
  { value: 'mask', label: 'mask' },
  { value: 'smart', label: 'smart' },
];

const NewsSelect = () => <Select options={options} />;

export default NewsSelect;
