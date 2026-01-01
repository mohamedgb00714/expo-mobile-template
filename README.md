# Expo Mobile App Template

A modern cross-platform mobile application template using the latest versions of Expo and React Native.

## 🚀 Tech Stack

- **Expo SDK** 52 - Latest Expo framework
- **React Native** 0.76+ - Cross-platform mobile development
- **Expo Router** 4+ - File-based routing for React Native
- **TypeScript** 5.7+ - Type-safe development
- **React Navigation** 7+ - Navigation library
- **New Architecture** - Ready for React Native's new architecture

## 📋 Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- Expo Go app (for testing on physical devices)
- iOS Simulator (Mac only) or Android Emulator

## 🛠️ Setup

### 1. Clone and Install

```bash
git clone <your-repo>
cd expo-mobile-template
npm install
```

### 2. Start Development

```bash
# Start Expo dev server
npm start

# Run on iOS (Mac only)
npm run ios

# Run on Android
npm run android

# Run on web
npm run web
```

## 📱 Development

### Running on Physical Device

1. Install Expo Go from App Store or Play Store
2. Run `npm start`
3. Scan the QR code with your device

### Running on Simulators

**iOS (Mac only):**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

## 📁 Project Structure

```
├── app/                 # App screens (file-based routing)
│   ├── (tabs)/         # Tab navigator screens
│   │   ├── index.tsx   # Home screen
│   │   ├── explore.tsx # Explore screen
│   │   └── profile.tsx # Profile screen
│   ├── _layout.tsx     # Root layout
│   └── modal.tsx       # Modal screen
├── assets/             # Images, fonts, etc.
├── components/         # Reusable components
├── constants/          # App constants
├── hooks/             # Custom hooks
└── utils/             # Utility functions
```

## 🎯 Features

- **File-based Routing**: Expo Router provides automatic routing based on file structure
- **Tab Navigation**: Pre-configured bottom tab navigation
- **Modal Presentations**: Example modal screen
- **TypeScript**: Full type safety across the application
- **New Architecture Ready**: Prepared for React Native's new architecture
- **Cross-Platform**: Works on iOS, Android, and Web

## 🔧 Available Scripts

```bash
npm start          # Start Expo development server
npm run ios        # Run on iOS simulator
npm run android    # Run on Android emulator
npm run web        # Run on web browser
npm run lint       # Lint code
npm run format     # Format code with Prettier
npm run typecheck  # Type check without emitting
```

## 📦 Adding Dependencies

### Native Dependencies

For dependencies that include native code:

```bash
npx expo install <package-name>
```

### JavaScript-only Dependencies

For pure JavaScript packages:

```bash
npm install <package-name>
```

## 🏗️ Building for Production

### Create Development Build

```bash
npx expo prebuild
```

### Build for iOS

```bash
eas build --platform ios
```

### Build for Android

```bash
eas build --platform android
```

**Note**: Building requires an Expo account. Create one for free at https://expo.dev

## 🎨 Customization

### Change App Icon

Replace files in `assets/`:
- `icon.png` - App icon
- `splash.png` - Splash screen
- `adaptive-icon.png` - Android adaptive icon

### Update App Name

Edit `app.json`:
```json
{
  "expo": {
    "name": "Your App Name",
    "slug": "your-app-slug"
  }
}
```

### Configure Bundle Identifiers

Edit `app.json`:
```json
{
  "expo": {
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourapp"
    },
    "android": {
      "package": "com.yourcompany.yourapp"
    }
  }
}
```

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev)
- [Expo Router Documentation](https://expo.github.io/router)
- [React Native Documentation](https://reactnative.dev)
- [React Navigation](https://reactnavigation.org)

## 🆘 Troubleshooting

### Clear Cache

```bash
npx expo start -c
```

### Reset Metro Bundler

```bash
rm -rf node_modules
npm install
npx expo start -c
```

### iOS Specific Issues

```bash
cd ios
pod install
cd ..
```

## 📄 License

MIT
