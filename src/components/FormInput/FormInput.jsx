import React from 'react';
import css from './FormInput.module.css';

const FormInput = ({ value, name, onChange, type }) => (
  <label style={{ border: '1px solid green', padding: ' 0 20px 10px 0 ' }}>
    <p>{name}</p>
    <input
      placeholder={name}
      className={css.Container}
      type={type}
      onChange={onChange}
      name={name}
      value={value}
    />
  </label>
);

export default FormInput;
