/**
 * @file text.tsx
 * @description Base typography component with variant support for Enigma features.
 */
import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

interface EnigmaTextProps extends TextProps {
  /** The typography variant to apply */
  type?: 'default' | 'title' | 'link' | 'small' | 'muted' | 'semiBold';
  className?: string;
}

/**
 * EnigmaText Component
 * @param {EnigmaTextProps} props - Typography properties.
 * @returns {React.ReactElement} The rendered text.
 */
export const Text: React.FC<EnigmaTextProps> = ({ 
  className = '', 
  type = 'default', 
  children, 
  ...rest 
}) => {
  // Logicistics: Mapping variants to specific Tailwind utility classes
  const typeClasses = {
    default: 'text-white text-base font-medium',
    title: 'text-white text-2xl font-bold tracking-tight',
    semiBold: 'text-white text-base font-semibold',
    link: 'text-primary font-bold',
    small: 'text-white text-xs',
    muted: 'text-muted text-[10px] uppercase font-bold tracking-widest',
  };

  return (
    <RNText
      className={ `${typeClasses[type]} ${className}` }
      { ...rest }
    >
      { children }
    </RNText>
  );
};