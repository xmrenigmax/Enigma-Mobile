import React from 'react';
import { Tabs } from 'expo-router';
import { LayoutDashboard, Box } from 'lucide-react-native';
import { COLORS } from '@/constants/Colors';

/**
 * TabLayout Component
 * @returns {React.ReactElement}
 */
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.muted,
        tabBarStyle: {
          backgroundColor: COLORS.surface,
          borderTopColor: COLORS.border,
          height: 85,
          paddingBottom: 25,
          paddingTop: 10,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Command',
          tabBarIcon: ({ color }) => <LayoutDashboard size={ 24 } color={ color } />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Atlas',
          tabBarIcon: ({ color }) => <Box size={ 24 } color={ color } />,
        }}
      />
    </Tabs>
  );
}