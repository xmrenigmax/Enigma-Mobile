/**
 * @file view.tsx
 * @description Base layout component for Enigma features.
 */
import React from 'react';
import { View as RNView, ViewProps } from 'react-native';

interface EnigmaViewProps extends ViewProps {
  className?: string;
}

/**
 * EnigmaView Component
 * @param {EnigmaViewProps} props - Standard React Native view properties.
 * @returns {React.ReactElement} The rendered view.
 */
export const View: React.FC<EnigmaViewProps> = ({ className, children, ...rest }) => {
  return (
    <RNView className={ className } { ...rest }>
      { children }
    </RNView>
  );
};