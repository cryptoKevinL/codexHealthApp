# Codex Health App

React Native (Expo) starter for a food + health + activity tracker.

## Getting started

1. Install deps

```bash
npm install
```

2. Create env file

```bash
cp .env.example .env
```

3. Run iOS

```bash
npm run ios
```

## HealthKit (iOS)

HealthKit requires a custom dev client (Expo Go is not enough).

```bash
npx expo prebuild
npx expo run:ios
```

Then press "Connect" in the Activity tab to request HealthKit access.

## Notes

- Email signup is disabled in the UI until Supabase auth is wired.
- Apple Health sync is wired via HealthKit and requires the custom dev client.
- Supabase client lives in `src/lib/supabase.ts` and reads `EXPO_PUBLIC_` env vars.
