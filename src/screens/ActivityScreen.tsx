import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  useIsHealthDataAvailable,
  useHealthkitAuthorization,
  useMostRecentQuantitySample
} from '@kingstinct/react-native-healthkit';
import { SectionHeader } from '../components/SectionHeader';
import { ListItem } from '../components/ListItem';
import { theme } from '../theme';

function HealthKitPanel() {
  const healthDataAvailable = useIsHealthDataAvailable();
  const [authorizationStatus, requestAuthorization] = useHealthkitAuthorization([
    'HKQuantityTypeIdentifierStepCount'
  ]);
  const [error, setError] = React.useState<string | null>(null);

  const handleAuthorizationRequest = React.useCallback(async () => {
    try {
      setError(null);
      await requestAuthorization();
    } catch (requestError) {
      const message =
        requestError instanceof Error ? requestError.message : 'Unable to authorize HealthKit.';
      setError(message);
    }
  }, [requestAuthorization]);

  const stepsSample = useMostRecentQuantitySample('HKQuantityTypeIdentifierStepCount');
  const stepsValue =
    stepsSample?.quantity && typeof stepsSample.quantity === 'number'
      ? Math.round(stepsSample.quantity)
      : null;

  return (
    <View style={styles.healthCard}>
      <View style={{ flex: 1, paddingRight: theme.spacing.sm }}>
        <Text style={styles.healthTitle}>Apple Health</Text>
        <Text style={styles.healthSubtitle}>
          Sync steps, workouts, and heart rate
        </Text>
        <Text style={styles.healthMeta}>
          Status:{' '}
          {healthDataAvailable === false
            ? 'unavailable'
            : authorizationStatus ?? 'not requested'}
        </Text>
        {error ? <Text style={styles.healthError}>{error}</Text> : null}
      </View>
      <TouchableOpacity
        style={styles.healthButton}
        onPress={handleAuthorizationRequest}
        disabled={healthDataAvailable === false}
      >
        <Text style={styles.healthButtonText}>Connect</Text>
      </TouchableOpacity>
      <View style={styles.healthStat}>
        <Text style={styles.healthStatLabel}>Steps</Text>
        <Text style={styles.healthStatValue}>{stepsValue ?? '--'}</Text>
      </View>
    </View>
  );
}

export function ActivityScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Activity" subtitle="Move, workouts, and recovery" />

      {Platform.OS === 'ios' ? (
        <HealthKitPanel />
      ) : (
        <View style={styles.healthCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.healthTitle}>Apple Health</Text>
            <Text style={styles.healthSubtitle}>
              HealthKit is available on iOS only.
            </Text>
          </View>
          <Switch value={false} disabled />
        </View>
      )}

      <View style={styles.statsRow}>
        <View style={styles.statPill}>
          <Ionicons name="walk" size={16} color={theme.colors.accent2} />
          <Text style={styles.statText}>7,842 steps</Text>
        </View>
        <View style={styles.statPill}>
          <Ionicons name="heart" size={16} color={theme.colors.danger} />
          <Text style={styles.statText}>118 bpm avg</Text>
        </View>
      </View>

      <SectionHeader title="Log activity" subtitle="Manual entries" />
      <ListItem title="Strength session" subtitle="45 min · 320 kcal" rightLabel="Today" />
      <ListItem title="Evening walk" subtitle="32 min · 180 kcal" rightLabel="Yesterday" />

      <View style={styles.addActivity}>
        <Ionicons name="add-circle" size={20} color={theme.colors.accent} />
        <Text style={styles.addActivityText}>Add manual activity</Text>
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
  healthCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.lg
  },
  healthTitle: {
    fontFamily: theme.typography.display,
    fontSize: 16,
    color: theme.colors.text
  },
  healthSubtitle: {
    marginTop: 4,
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted
  },
  healthMeta: {
    marginTop: 6,
    fontFamily: theme.typography.body,
    fontSize: 11,
    color: theme.colors.muted
  },
  healthError: {
    marginTop: 4,
    fontFamily: theme.typography.body,
    fontSize: 11,
    color: theme.colors.danger
  },
  healthButton: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 8,
    borderRadius: theme.radius.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.surface2,
    marginRight: theme.spacing.sm
  },
  healthButtonText: {
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.text
  },
  healthStat: {
    minWidth: 64,
    alignItems: 'flex-end'
  },
  healthStatLabel: {
    fontFamily: theme.typography.body,
    fontSize: 10,
    color: theme.colors.muted,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  healthStatValue: {
    marginTop: 4,
    fontFamily: theme.typography.display,
    fontSize: 18,
    color: theme.colors.text
  },
  statsRow: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg
  },
  statPill: {
    flex: 1,
    backgroundColor: theme.colors.surface2,
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: theme.colors.border
  },
  statText: {
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.text
  },
  addActivity: {
    marginTop: theme.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border
  },
  addActivityText: {
    fontFamily: theme.typography.body,
    fontSize: 14,
    color: theme.colors.text
  }
});
