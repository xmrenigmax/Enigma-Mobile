import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/Colors';
import "../../global.css";

export default function DynamicDashboard() {
  // Logicistics State: This would eventually come from a 'UserPreferences' DB
  const [activeWidgets] = useState(['metrics', 'ai_insight', 'security_brief']);

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      {/* Dynamic Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <View className="flex-row items-center">
          <View className="bg-primary/20 p-2 rounded-xl">
            <AntDesign name="left" size={24} color={COLORS.primary} />
          </View>
          <View className="ml-3">
            <Text className="text-white text-2xl font-bold tracking-tight">Enigma</Text>
            <Text className="text-muted text-[10px] uppercase font-bold tracking-widest">Logicistics Hub</Text>
          </View>
        </View>

        {/* Notification Hub Trigger */}
        <TouchableOpacity className="relative p-2">
          <AntDesign name="bell" size={24} color="white" />
          <View className="absolute top-2 right-2 w-2.5 h-2.5 bg-error rounded-full border-2 border-background" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        
        {/* Render Logic: The Dashboard "Slots" */}
        <View className="flex-row flex-wrap justify-between mt-4">
          
          {/* 1. Quick Stats Component (The 'Metrics' Card) */}
          <View className="w-full bg-surface border border-border rounded-3xl p-5 mb-4">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-white font-bold text-lg">System Pulse</Text>
              <AntDesign name="picture" size={18} color={COLORS.success} />
            </View>
            <View className="flex-row justify-between">
              <View>
                <Text className="text-muted text-xs uppercase">Assets</Text>
                <Text className="text-white text-xl font-bold">1.2k</Text>
              </View>
              <View>
                <Text className="text-muted text-xs uppercase">Security</Text>
                <Text className="text-white text-xl font-bold">100%</Text>
              </View>
              <View>
                <Text className="text-muted text-xs uppercase">Flows</Text>
                <Text className="text-white text-xl font-bold">42</Text>
              </View>
            </View>
          </View>

          {/* 2. AI Agent Insight (The 'Dynamic' AI Card) */}
          <View className="w-full bg-primary/10 border border-primary/20 rounded-3xl p-6 mb-4">
             <View className="flex-row items-center mb-3">
              <AntDesign name="bulb" size={20} color={COLORS.primary} />
              <Text className="text-primary font-bold text-sm ml-2 uppercase">AI Recommendation</Text>
            </View>
            <Text className="text-white text-base leading-6">
              "Floor 3 HVAC is cycling 20% more than usual. Automated maintenance ticket suggested."
            </Text>
            <TouchableOpacity className="mt-4 bg-primary py-3 rounded-xl items-center">
              <Text className="text-white font-bold">Review & Execute</Text>
            </TouchableOpacity>
          </View>

        </View>

        {/* Dashboard Customization Button */}
        <TouchableOpacity className="flex-row items-center justify-center py-8 border border-dashed border-border rounded-3xl mb-10">
          <AntDesign name="appstore" size={16} color={COLORS.muted} />
          <Text className="text-muted font-bold ml-2 uppercase text-xs">Customize Workspace</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}