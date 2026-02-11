import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SectionHeader } from '../components/SectionHeader';
import { theme } from '../theme';

export function HistoryScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Analysis" subtitle="Weekly performance" />

      <View style={styles.chartPlaceholder}>
        <Text style={styles.chartTitle}>7-day calorie trend</Text>
        <View style={styles.chartBars}>
          {[64, 88, 72, 90, 75, 82, 68].map((height, idx) => (
            <View key={idx} style={[styles.chartBar, { height }]} />
          ))}
        </View>
        <Text style={styles.chartNote}>Average 1,780 kcal · 82% goal</Text>
      </View>

      <SectionHeader title="Macros" subtitle="Balance snapshot" />
      <View style={styles.macroRow}>
        <View style={styles.macroCard}>
          <Text style={styles.macroLabel}>Protein</Text>
          <Text style={styles.macroValue}>32%</Text>
        </View>
        <View style={styles.macroCard}>
          <Text style={styles.macroLabel}>Carbs</Text>
          <Text style={styles.macroValue}>40%</Text>
        </View>
        <View style={styles.macroCard}>
          <Text style={styles.macroLabel}>Fats</Text>
          <Text style={styles.macroValue}>28%</Text>
        </View>
      </View>

      <SectionHeader title="Milestones" subtitle="Progress highlights" />
      <View style={styles.milestoneCard}>
        <Text style={styles.milestoneTitle}>Hydration goal</Text>
        <Text style={styles.milestoneValue}>6 of 7 days</Text>
        <Text style={styles.milestoneSub}>Best streak since Jan 10</Text>
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
  chartPlaceholder: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.lg
  },
  chartTitle: {
    fontFamily: theme.typography.display,
    fontSize: 16,
    color: theme.colors.text
  },
  chartBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    height: 110
  },
  chartBar: {
    flex: 1,
    backgroundColor: theme.colors.accent2,
    borderRadius: 6
  },
  chartNote: {
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted
  },
  macroRow: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg
  },
  macroCard: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border
  },
  macroLabel: {
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  macroValue: {
    marginTop: 6,
    fontFamily: theme.typography.display,
    fontSize: 20,
    color: theme.colors.text
  },
  milestoneCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border
  },
  milestoneTitle: {
    fontFamily: theme.typography.display,
    fontSize: 16,
    color: theme.colors.text
  },
  milestoneValue: {
    marginTop: 8,
    fontFamily: theme.typography.display,
    fontSize: 22,
    color: theme.colors.accent
  },
  milestoneSub: {
    marginTop: 4,
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted
  }
});
