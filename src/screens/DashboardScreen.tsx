import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SectionHeader } from '../components/SectionHeader';
import { StatCard } from '../components/StatCard';
import { theme } from '../theme';

export function DashboardScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(16)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 500, useNativeDriver: true })
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
        <Text style={styles.kicker}>Today</Text>
        <Text style={styles.title}>Good afternoon, Kevin</Text>
      </Animated.View>

      <LinearGradient
        colors={['#1C1F26', '#2A2F38']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <View>
          <Text style={styles.heroLabel}>Energy Balance</Text>
          <Text style={styles.heroValue}>1,620 kcal</Text>
          <Text style={styles.heroSub}>420 kcal remaining</Text>
        </View>
        <View style={styles.heroRing}>
          <Text style={styles.heroRingValue}>68%</Text>
          <Text style={styles.heroRingLabel}>Daily goal</Text>
        </View>
      </LinearGradient>

      <View style={styles.row}>
        <StatCard label="Steps" value="7,842" unit="steps" tint={['#1B2528', '#0F1F1D']} />
        <View style={{ width: theme.spacing.sm }} />
        <StatCard label="Activity" value="42" unit="min" tint={['#2A1C14', '#17120E']} />
      </View>

      <View style={styles.row}>
        <StatCard label="Protein" value="96" unit="g" tint={['#202231', '#14161B']} />
        <View style={{ width: theme.spacing.sm }} />
        <StatCard label="Hydration" value="58" unit="oz" tint={['#16222B', '#0E141B']} />
      </View>

      <SectionHeader title="Quick actions" subtitle="Capture meals, steps, and workouts" />
      <View style={styles.actions}>
        {[
          { label: 'Log meal', icon: 'restaurant' },
          { label: 'Scan barcode', icon: 'barcode' },
          { label: 'Add activity', icon: 'walk' }
        ].map((item) => (
          <View key={item.label} style={styles.actionCard}>
            <Ionicons name={item.icon as any} size={20} color={theme.colors.accent} />
            <Text style={styles.actionLabel}>{item.label}</Text>
          </View>
        ))}
      </View>

      <SectionHeader title="Insights" subtitle="Trends based on your last 7 days" />
      <View style={styles.insightCard}>
        <Text style={styles.insightTitle}>Consistency streak</Text>
        <Text style={styles.insightValue}>5 days</Text>
        <Text style={styles.insightSub}>Your best since Jan 20</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg
  },
  content: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xl
  },
  kicker: {
    fontFamily: theme.typography.body,
    color: theme.colors.muted,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.4
  },
  title: {
    fontFamily: theme.typography.display,
    fontSize: 28,
    color: theme.colors.text,
    marginTop: 4,
    marginBottom: theme.spacing.md
  },
  hero: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.lg
  },
  heroLabel: {
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted,
    textTransform: 'uppercase',
    letterSpacing: 1.2
  },
  heroValue: {
    fontFamily: theme.typography.display,
    fontSize: 30,
    color: theme.colors.text,
    marginTop: 8
  },
  heroSub: {
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted,
    marginTop: 6
  },
  heroRing: {
    height: 88,
    width: 88,
    borderRadius: 44,
    borderWidth: 4,
    borderColor: theme.colors.accent2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heroRingValue: {
    fontFamily: theme.typography.display,
    fontSize: 20,
    color: theme.colors.text
  },
  heroRingLabel: {
    fontFamily: theme.typography.body,
    fontSize: 10,
    color: theme.colors.muted
  },
  row: {
    flexDirection: 'row',
    marginBottom: theme.spacing.sm
  },
  actions: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg
  },
  actionCard: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border
  },
  actionLabel: {
    marginTop: theme.spacing.sm,
    fontFamily: theme.typography.body,
    fontSize: 13,
    color: theme.colors.text
  },
  insightCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border
  },
  insightTitle: {
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  insightValue: {
    fontFamily: theme.typography.display,
    fontSize: 24,
    color: theme.colors.text,
    marginTop: 8
  },
  insightSub: {
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted,
    marginTop: 4
  }
});
