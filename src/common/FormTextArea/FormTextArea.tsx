import { FC } from 'react';
import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';

import { InputWrapper } from '../styles';

interface IFormTextArea {
  required?: boolean;
  name: string;
  label: string;
  inputValue: any;
  onInputChange: (e: any) => void;
};

const FormTextArea: FC<IFormTextArea> = ({ required, name, label, inputValue, onInputChange }) => {
  return (
    <InputWrapper>
      <FormControl isRequired={required}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Textarea autoComplete='off' id={name} name={name} value={inputValue} onChange={onInputChange} required={required} />
      </FormControl>
    </InputWrapper>
  );
};

export default FormTextArea;