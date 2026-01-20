/**
 * @file use-color-scheme.ts
 * @description Logicistics hook for system color preference.
 */
import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * useColorScheme
 * @returns {string} Current color scheme ('light' or 'dark').
 */
export function useColorScheme() {
  const colorScheme = useRNColorScheme();
  return colorScheme ?? 'dark';
}