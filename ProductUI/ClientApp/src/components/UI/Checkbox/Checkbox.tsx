import React from 'react';
import './Checkbox.scss';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
  label: string;
  className?: string;
  checked?: boolean;
  value: string;
  handleChange: (value: string, name: string) => void;
  name?: string;
  disabled?: boolean;
}

export const CustomCheckbox: React.FC<Props> = ({
  label,
  className = '',
  checked = false,
  value,
  name = '',
  handleChange,
  disabled,
}) => {
  const { t } = useTranslation();
  return (
    <div className={`checkbox ${className}`}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            value={value}
            onChange={(e) => handleChange(e.target.value, name)}
            disabled={disabled}
          />
        }
        label={t(label)}
      />
    </div>
  );
};
