import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SectionHeader } from '../components/SectionHeader';
import { theme } from '../theme';

const meals = [
  { name: 'Greek yogurt + berries', time: '7:40 AM', calories: 320, protein: 24 },
  { name: 'Chicken quinoa bowl', time: '12:20 PM', calories: 540, protein: 38 },
  { name: 'Matcha latte', time: '3:10 PM', calories: 190, protein: 12 }
];

export function MealsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeader title="Meals" subtitle="Today" />

      <View style={styles.summary}>
        <View>
          <Text style={styles.summaryLabel}>Calories</Text>
          <Text style={styles.summaryValue}>1,050</Text>
        </View>
        <View>
          <Text style={styles.summaryLabel}>Protein</Text>
          <Text style={styles.summaryValue}>74 g</Text>
        </View>
        <View>
          <Text style={styles.summaryLabel}>Net carbs</Text>
          <Text style={styles.summaryValue}>98 g</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addButton} activeOpacity={0.9}>
        <Ionicons name="add" size={18} color={theme.colors.bg} />
        <Text style={styles.addButtonText}>New meal entry</Text>
      </TouchableOpacity>

      <SectionHeader title="History" subtitle="Recent meals" />
      {meals.map((meal) => (
        <View key={meal.name} style={styles.mealCard}>
          <View style={styles.mealRow}>
            <Text style={styles.mealName}>{meal.name}</Text>
            <Text style={styles.mealCalories}>{meal.calories} kcal</Text>
          </View>
          <Text style={styles.mealMeta}>{meal.time} · {meal.protein} g protein</Text>
        </View>
      ))}
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
  summary: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md
  },
  summaryLabel: {
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  summaryValue: {
    fontFamily: theme.typography.display,
    fontSize: 18,
    color: theme.colors.text,
    marginTop: 6
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: theme.colors.accent,
    borderRadius: theme.radius.md,
    paddingVertical: theme.spacing.sm,
    marginBottom: theme.spacing.lg
  },
  addButtonText: {
    fontFamily: theme.typography.body,
    fontSize: 14,
    color: theme.colors.bg
  },
  mealCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.sm
  },
  mealRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mealName: {
    fontFamily: theme.typography.display,
    fontSize: 16,
    color: theme.colors.text,
    flex: 1,
    paddingRight: 12
  },
  mealCalories: {
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted
  },
  mealMeta: {
    marginTop: 6,
    fontFamily: theme.typography.body,
    fontSize: 12,
    color: theme.colors.muted
  }
});
