import React from 'react';
import './RadioButtonsGroup.scss';
import { FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from '@mui/material';
import { Text } from '../Text';
import { useTranslation } from 'react-i18next';

interface Props {
  groupLabel?: string;
  className?: string;
  handleChange: (value: string) => void;
  radioInputs: any[];
  groupValue?: string;
  error?: any;
  groupName?: string;
  errorMessage?: string;
}

const RadioButtonsGroup: React.FC<Props> = ({
  groupLabel,
  groupValue,
  handleChange,
  radioInputs,
  className = '',
  error,
  errorMessage = '',
  groupName,
}) => {
  const { t } = useTranslation();

  return (
    <FormControl className={className} component="fieldset" error={error}>
      {groupLabel ? <Text className="description-bold" text={groupLabel} /> : null}
      <FormHelperText>{t(errorMessage)}</FormHelperText>
      <RadioGroup value={groupValue} aria-label={groupName} onChange={(e) => handleChange(e.target.value)}>
        {radioInputs.map(({ label, ...radioProps }, index: number) => (
          <FormControlLabel key={index} control={<Radio />} label={label} {...radioProps} className="radio" />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioButtonsGroup;
