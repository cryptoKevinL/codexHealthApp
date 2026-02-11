import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SectionHeader } from '../components/SectionHeader';
import { ListItem } from '../components/ListItem';
import { theme } from '../theme';

export function SettingsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Settings" subtitle="Personalize your experience" />

      <View style={styles.profileCard}>
        <Text style={styles.profileName}>Kevin Larson</Text>
        <Text style={styles.profileEmail}>email signup disabled</Text>
      </View>

      <SectionHeader title="Account" />
      <ListItem title="Email signup" subtitle="Disabled until backend ready" rightLabel="Disabled" />
      <ListItem title="Notifications" subtitle="Meal reminders, streaks" rightLabel="On" />

      <SectionHeader title="Preferences" />
      <ListItem title="Units" subtitle="Imperial (lbs, oz)" rightLabel="Edit" />
      <ListItem title="Daily goals" subtitle="Calories, macros, steps" rightLabel="Edit" />

      <SectionHeader title="About" />
      <ListItem title="Privacy" subtitle="RLS policies pending" rightLabel="View" />
      <ListItem title="App version" subtitle="0.1.0" rightLabel="iOS" />
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
  profileCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.lg
  },
  profileName: {
    fontFamily: theme.typography.display,
    fontSize: 18,
    color: theme.colors.text
  },
  profileEmail: {
    marginTop: 4,
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted
  }
});
