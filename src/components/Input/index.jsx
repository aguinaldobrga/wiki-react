import React from 'react';
import { Inputconteiner } from './style'; // Importação do styled-component

function Input({value, onChange}) {
  return (
    <Inputconteiner>
      <input value={value} onChange={onChange}/> 
    </Inputconteiner>
  );
}


export default Input;