import React from 'react';
import './TextInput.scss';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
  label?: string;
  width?: string;
  errorMessage?: string;
  name?: string
  ref?: any
  value?: string
  handleChange?: any
  type?: string
  placeholder?:string
}

export const TextInput: React.FC<Props> = React.forwardRef(({ 
  label, width, errorMessage = "", name, value, handleChange, type = "text",placeholder="" }, ref) => {
  const { t }= useTranslation()
  const translatedPlaceholder = t(placeholder)
  return (
    <div className={`text-input ${width ? width : ''}`}>
      <TextField 
        type={type} 
        value={value} 
        inputRef={ref} 
        label={label} 
        helperText={t(errorMessage)} 
        name={name} 
        onChange={(e) => handleChange(e.target.value, name)}
        placeholder={translatedPlaceholder}
      />
    </div>
  );
});

