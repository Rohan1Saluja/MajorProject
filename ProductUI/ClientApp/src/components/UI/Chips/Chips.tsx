import React from 'react';
import './Chips.scss';
import { Chip, FormHelperText } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
  list: Array<{ label: string | JSX.Element; value: string }>;
  selected: string;
  handleClick: any;
  name?: string;
  errorMessage?: string;
  className?: string;
}

export const Chips: React.FC<Props> = ({ list, selected, handleClick, name, errorMessage = '', className }) => {
  const { t } = useTranslation();
  return (
    <>
      <FormHelperText>{t(errorMessage)}</FormHelperText>
      <div className={`chips-container ${className}`}>
        {!!list?.length &&
          list.map((item) => (
            <Chip
              className={`chip ${selected === item.value ? 'selected' : ''}`}
              key={item.value}
              label={item.label}
              variant="outlined"
              onClick={() => handleClick(item.value, name)}
            />
          ))}
      </div>
    </>
  );
};
