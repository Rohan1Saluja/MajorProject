import React from 'react';
import { MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@mui/material';
import './SingleSelect.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  placeholder?: string;
  error?: any;
  label?: string;
  errorMessage?: string;
  list: Array<{ label: string; value: string | number }>;
  name: string;
  value?: string;
  handleChange?: any;
  customClass?: string;
}

export const SingleSelect: React.FC<Props> = ({
  placeholder,
  error,
  errorMessage = "",
  label,
  list,
  name,
  value = '',
  handleChange,
  customClass,
}) => {

  const { t }= useTranslation()

  return (
    <div className={`single-select ${customClass ? customClass : ''}`}>
      <FormControl variant="outlined" error={error}>
        <InputLabel htmlFor="single-select">{placeholder}</InputLabel>
        <Select
          value={value}
          onChange={(e) => handleChange(e.target.value, name)}
          label={label}
          placeholder={placeholder}
          inputProps={{
            name: name,
            id: 'single-select',
          }}
        >
          {list.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{t(errorMessage)}</FormHelperText>
      </FormControl>
    </div>
  );
};
