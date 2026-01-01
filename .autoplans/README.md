# AutoPlans Project

This project is managed with [autoplans.dev](https://autoplans.dev) for AI-assisted development.

## Project Type

**Expo Mobile Application** - Cross-platform mobile app for iOS and Android using React Native and Expo.

## Getting Started

1. Install dependencies: `pnpm install` or `npm install --legacy-peer-deps`
2. Start development server: `pnpm start` or `npm start`
3. Run on iOS: Press `i` in terminal or `pnpm ios`
4. Run on Android: Press `a` in terminal or `pnpm android`
5. Run on Web: Press `w` in terminal or `pnpm web`

## Tech Stack

- **Framework**: Expo (managed workflow)
- **UI Library**: React Native
- **Language**: TypeScript
- **Navigation**: Expo Router (file-based routing)
- **Styling**: React Native StyleSheet / NativeWind (Tailwind for RN)
- **State Management**: Context API / Zustand / Redux (depending on implementation)

## Platform Support

- **iOS**: iPhone and iPad (iOS 13+)
- **Android**: Android 5.0+ (API 21+)
- **Web**: Progressive Web App support

## AI Development Workflow

1. **Read Context**: Check `.autoplans/tasks.md` for current work
2. **Follow Patterns**: Review `.autoplans/architecture.md` for mobile-specific patterns
3. **Test on Multiple Platforms**: Always test on both iOS and Android
4. **Update Tasks**: Use AutoPlans tools to track progress

## Available AutoPlans Tools

- `autoplans_list_tasks` - View all tasks
- `autoplans_create_task` - Add new tasks
- `autoplans_update_task` - Update task status/details
- `autoplans_bulk_update_tasks` - Update multiple tasks at once
- `autoplans_sync_project_to_repo` - Sync project files to repository

## Development Commands

```bash
# Start Expo dev server
pnpm start
npm start

# Run on specific platform
pnpm ios          # iOS simulator
pnpm android      # Android emulator
pnpm web          # Web browser

# Build for production
pnpm build:ios    # iOS build
pnpm build:android # Android build

# Run tests
pnpm test
```

## Mobile-Specific Considerations

### Platform Differences
- **iOS**: Uses UIKit, requires macOS for building
- **Android**: Uses Android SDK, can build on any OS
- **Web**: Uses react-native-web

### Permissions
Mobile apps often need permissions:
- Camera
- Location
- Storage
- Notifications
- Contacts

### Navigation
Expo Router uses file-based routing similar to Next.js:
- `app/index.tsx` → Home screen
- `app/profile.tsx` → Profile screen
- `app/posts/[id].tsx` → Dynamic post screen

---
*This project uses AutoPlans.dev for AI-powered project management.*
