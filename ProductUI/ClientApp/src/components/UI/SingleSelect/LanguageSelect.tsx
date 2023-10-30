import React from 'react';
import { SingleSelect } from './SingleSelect';
import { languages } from './constants';
import i18next from 'i18next';

function LanguageSelect() {
  const handleLanguageChange = (value: string) => {
    i18next.changeLanguage(value);
    setLang(value);
  };

  const [lang, setLang] = React.useState('en');

  return (
    <div>
      <SingleSelect customClass='language-select' list={languages} name="Language" value={lang} handleChange={handleLanguageChange} />
    </div>
  );
}

export default LanguageSelect;
