/**
 * @file modal.tsx
 * @description Security/Auth modal for the Enigma ecosystem.
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

// PACS: Importing from centralized base components
import { Text } from '@/components/base/text';
import { View } from '@/components/base/view';

/**
 * ModalScreen Component
 * Provides a transient view for security confirmations or info.
 * @returns {React.ReactElement}
 */
export default function ModalScreen() {
  return (
    <View style={ styles.container } className="bg-surface/95">
      <View className="bg-primary/20 p-4 rounded-full mb-6">
        <Text type="title" className="text-center">Security Hub</Text>
      </View>

      <Text className="text-muted text-center mb-8 px-10">
        You are accessing a secure node. Actions performed here are logged.
      </Text>

      <Link href="/" dismissTo style={ styles.link } asChild>
        <View className="bg-primary/10 px-8 py-4 rounded-2xl border border-primary/30">
          <Text type="link">Return to Command</Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
  },
});