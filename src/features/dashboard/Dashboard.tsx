/**
 * @file Dashboard.tsx
 * @description Primary Command Center for Enigma Logicistics.
 * Orchestrates real-time system metrics and AI-driven insights.
 */
import React, { useMemo } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LayoutDashboard, Zap, ShieldCheck, Activity } from 'lucide-react-native';

// PACS: Importing from centralized base components
import { View } from '@/components/base/view';
import { Text } from '@/components/base/text';
import { COLORS } from '@/constants/Colors';

/**
 * Dashboard Component
 * The main "Product" entry for the user interface.
 * @returns {React.ReactElement} The rendered dashboard.
 */
const Dashboard: React.FC = () => {
  // Logicistics: Metrics could eventually be pulled from a Service (S)
  const systemStatus = useMemo(() => ({
    activeNodes: 142,
    securityLevel: 'Maximum',
    uptime: '99.99%',
  }), []);

  return (
    <SafeAreaView className="flex-1 bg-background" edges={ ['top'] }>
      {/* Header Segment */}
      <View className="px-6 py-4 d-f ai-c jc-sb">
        <View className="d-f ai-c">
          <View className="bg-primary/20 p-2.5 rounded-2xl glow-primary">
            <LayoutDashboard size={ 24 } color={ COLORS.primary } />
          </View>
          <View className="ml-4">
            <Text type="title">Enigma</Text>
            <Text type="muted">Command Center</Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={ false }>
        {/* System Pulse Segment (Using dashboard-card utility) */}
        <View className="dashboard-card mt-4">
          <View className="d-f ai-c jc-sb mb-6">
            <Text className="text-lg font-bold">System Pulse</Text>
            <Activity size={ 18 } color={ COLORS.success } />
          </View>
          
          <View className="d-f jc-sb">
            <View>
              <Text type="muted">Active Nodes</Text>
              <Text className="text-xl font-bold mt-1">{ systemStatus.activeNodes }</Text>
            </View>
            <View className="w-[1px] h-8 bg-border/40" />
            <View>
              <Text type="muted">Security</Text>
              <Text className="text-xl font-bold mt-1 text-success">{ systemStatus.securityLevel }</Text>
            </View>
            <View className="w-[1px] h-8 bg-border/40" />
            <View>
              <Text type="muted">Uptime</Text>
              <Text className="text-xl font-bold mt-1">{ systemStatus.uptime }</Text>
            </View>
          </View>
        </View>

        {/* Intelligence Segment (Using glow-primary utility) */}
        <TouchableOpacity className="dashboard-card glow-primary bg-primary/5 border-primary/20">
          <View className="d-f ai-c mb-3">
            <Zap size={ 20 } color={ COLORS.primary } />
            <Text className="text-primary font-bold text-sm ml-2 uppercase">Agentic Insight</Text>
          </View>
          <Text className="text-base leading-6">
            "Energy usage in the North Wing is 15% above baseline. Suggest deploying the 'Eco-Sync' flow."
          </Text>
          <View className="mt-5 bg-primary py-4 rounded-2xl ai-c">
            <Text className="font-bold text-white">Execute Optimization</Text>
          </View>
        </TouchableOpacity>

        {/* Security Quick Action */}
        <TouchableOpacity className="dashboard-card border-error/20 bg-error/5">
          <View className="d-f ai-c mb-2">
            <ShieldCheck size={ 18 } color={ COLORS.error } />
            <Text className="text-error font-bold ml-2 uppercase text-[10px]">Security Protocol</Text>
          </View>
          <Text className="text-white text-sm">Initiate system-wide identity purge?</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;