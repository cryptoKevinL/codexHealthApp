import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

type Props = {
  title: string;
  subtitle?: string;
  rightLabel?: string;
  onPress?: () => void;
};

export function ListItem({ title, subtitle, rightLabel, onPress }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.textBlock}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.right}>
        {rightLabel ? <Text style={styles.rightLabel}>{rightLabel}</Text> : null}
        <Ionicons name="chevron-forward" size={18} color={theme.colors.muted} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border
  },
  textBlock: {
    flex: 1
  },
  title: {
    fontFamily: theme.typography.body,
    fontSize: 16,
    color: theme.colors.text
  },
  subtitle: {
    marginTop: 2,
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  rightLabel: {
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted
  }
});
