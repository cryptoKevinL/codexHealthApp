import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';

type Props = {
  label: string;
  value: string;
  unit?: string;
  tint?: string[];
};

export function StatCard({ label, value, unit, tint }: Props) {
  return (
    <LinearGradient
      colors={tint ?? [theme.colors.surface2, theme.colors.surface]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        <Text style={styles.value}>{value}</Text>
        {unit ? <Text style={styles.unit}>{unit}</Text> : null}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    minHeight: 96,
    borderWidth: 1,
    borderColor: theme.colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 4
  },
  label: {
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: theme.spacing.sm
  },
  value: {
    fontFamily: theme.typography.display,
    fontSize: 28,
    color: theme.colors.text
  },
  unit: {
    marginLeft: 6,
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted,
    marginBottom: 4
  }
});
