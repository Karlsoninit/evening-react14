import React from 'react';
import Select from 'react-select';
import toggle from '../HOC/ToggleHOC';
const options = [
  { value: 'apple', label: 'apple' },
  { value: 'cars', label: 'cars' },
  { value: 'mask', label: 'mask' },
  { value: 'smart', label: 'smart' },
];

const NewsSelect = props => {
  console.log(props);
  return (
    <Select
      someProps={'someName'}
      options={options}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default toggle({ name: 'filter' })(NewsSelect);
