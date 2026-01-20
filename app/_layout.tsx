import React, { useEffect, useState, useMemo } from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

// Unified Constants and Global Styles
import { COLORS } from '@/constants/Colors';
import "@/styles/index.css";

/**
 * RootLayout Component
 * @returns {React.ReactElement | null}
 */
export default function RootLayout() {
  const [isSystemReady, setIsSystemReady] = useState<boolean>(false);

  useEffect(() => {
    /**
     * initializeApplication
     * Synchronizes system components and clears the splash screen.
     */
    const initializeApplication = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Artificial system sync delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSystemReady(true);
      } catch (error) {
        console.warn('Bootup Warning:', error);
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    initializeApplication();
  }, []);

  const memoizedTheme = useMemo(() => ({
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: COLORS.background,
      primary: COLORS.primary,
      card: COLORS.surface,
      text: COLORS.text,
      border: COLORS.border,
    },
  }), []);

  if (!isSystemReady) return null;

  return (
    <ThemeProvider value={ memoizedTheme }>
      <Stack screenOptions={{ headerShown: false }}>
        {/* The name here must match the folder name exactly */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}