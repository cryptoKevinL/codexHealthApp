import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

type Props = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.sm
  },
  title: {
    fontFamily: theme.typography.display,
    fontSize: 20,
    color: theme.colors.text,
    letterSpacing: 0.3
  },
  subtitle: {
    marginTop: 4,
    fontFamily: theme.typography.body,
    fontSize: 13,
    color: theme.colors.muted
  }
});
