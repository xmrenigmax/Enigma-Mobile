/**
 * @file _layout.tsx
 * @description Bottom Tab Navigator configuration for Enigma Logicistics.
 */
import { COLORS } from '@/constants/Colors';
import { Tabs } from 'expo-router';
import { Box, LayoutDashboard, Workflow } from 'lucide-react-native';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.muted,
      tabBarStyle: {
        backgroundColor: COLORS.surface,
        borderTopColor: COLORS.border,
        height: 85,
        paddingBottom: 25,
        paddingTop: 10,
      },
      headerStyle: {
        backgroundColor: COLORS.background,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: COLORS.text,
      },
      headerShadowVisible: false,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Command',
          tabBarIcon: ({ color }) => <LayoutDashboard size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="assets"
        options={{
          title: 'Atlas',
          tabBarIcon: ({ color }) => <Box size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="flows"
        options={{
          title: 'Flows',
          tabBarIcon: ({ color }) => <Workflow size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}