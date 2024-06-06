import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const FormPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log(inputValue);
  };

  return (
    <div className="form-container">
      <h1>Formulário</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input value={inputValue} onChange={handleInputChange} />
        <Button onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default FormPage;