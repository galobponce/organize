import React from 'react';
import { Input, FormControl, FormLabel } from '@chakra-ui/react';

import { InputWrapper } from './styles';

interface IFormInput {
  required?: boolean;
  type: string;
  name: string;
  label: string;
  inputValue: any;
  onInputChange: (e: any) => void;
};

const FormInput: React.FC<IFormInput> = ({ required, name, type, label, inputValue, onInputChange }) => {
  return (
    <InputWrapper>
      <FormControl isRequired={required}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Input type={type} autoComplete='off' id={name} name={name} value={inputValue} onChange={onInputChange} required={required} />
      </FormControl>
    </InputWrapper>
  );
};

export default FormInput;