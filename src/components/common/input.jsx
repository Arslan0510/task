import React from 'react';

const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type='text'
        name={name}
        className='form-control'
        value={value}
        onChange={onChange}
      />
      {error && <div className='alert alert-danger'>Field is required</div>}
    </div>
  );
};

export default Input;
