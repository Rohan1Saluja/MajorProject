import React from 'react';
import BrgnLogo from './logos/brgn.svg';
import "./Logo.scss";

interface Props {
  className?: string;
  company: string;
  altText?: string;
}

export const Logo: React.FC<Props> = ({ company, className = '', altText = '' }) => {
  return (
    <img className={`logo ${className}`} src={BrgnLogo} alt={altText} />
  );
};
