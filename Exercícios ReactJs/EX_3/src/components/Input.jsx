import React from 'react';

const Input = ({ value, onChange }) => {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={onChange} 
      placeholder="Digite algo" 
    />
  );
}

export default Input;
