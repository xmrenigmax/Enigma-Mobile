import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native'; // Replacing IconSymbol for stability

import { Text } from '@/components/base/text';
import { View } from '@/components/base/view';
import { COLORS } from '@/constants/Colors';

/**
 * Collapsible Component
 * @param {PropsWithChildren & { title: string }} props - Component props.
 * @returns {React.ReactElement}
 */
export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        className="flex-row ai-c py-2"
        style={{ gap: 6 }}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <ChevronRight
          size={18}
          color={COLORS.muted}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />
        <Text type="semiBold">{title}</Text>
      </TouchableOpacity>
      {isOpen && <View className="mt-2 ml-6">{children}</View>}
    </View>
  );
}