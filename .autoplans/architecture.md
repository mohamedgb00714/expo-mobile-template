# Expo Mobile Application Architecture

## Project Overview

Cross-platform mobile application built with Expo and React Native, supporting iOS, Android, and Web from a single codebase.

## Technology Stack

### Core Framework
- **Expo**: Managed React Native workflow with built-in features
- **React Native**: Cross-platform mobile UI framework
- **TypeScript**: Type-safe mobile development
- **Expo Router**: File-based navigation system

### UI & Styling
- **React Native Components**: Built-in UI components
- **NativeWind** (optional): Tailwind CSS for React Native
- **React Native StyleSheet**: Native styling API
- **Expo Vector Icons**: Icon library

### Development Tools
- **Expo Go**: Development client for testing
- **EAS (Expo Application Services)**: Build and deployment
- **Metro Bundler**: JavaScript bundler for React Native

## Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Mobile Devices                            │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │    iOS     │  │  Android   │  │    Web     │            │
│  └────────────┘  └────────────┘  └────────────┘            │
└────────────┬──────────┬───────────────┬────────────────────┘
             │          │               │
             └──────────┴───────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                 React Native Layer                           │
│  ┌────────────────────────────────────────────────────┐     │
│  │              Expo Router (Navigation)              │     │
│  │  - File-based routing                              │     │
│  │  - Stack, Tab, Drawer navigation                   │     │
│  │  - Deep linking                                    │     │
│  └────────────────────────────────────────────────────┘     │
│  ┌────────────────────────────────────────────────────┐     │
│  │              React Native Components               │     │
│  │  - View, Text, Image, ScrollView, etc.            │     │
│  │  - Touchable components                            │     │
│  │  - Platform-specific components                    │     │
│  └────────────────────────────────────────────────────┘     │
│  ┌────────────────────────────────────────────────────┐     │
│  │              State Management                      │     │
│  │  - React Context / Zustand / Redux                 │     │
│  │  - AsyncStorage for persistence                    │     │
│  └────────────────────────────────────────────────────┘     │
└────────────┬────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────┐
│              Expo Native Modules                             │
│  - Camera, ImagePicker, Location                             │
│  - Notifications, FileSystem                                 │
│  - SecureStore, Sensors                                      │
└────────────┬────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────┐
│              Native Platform                                 │
│  iOS (UIKit) / Android (SDK) / Web (DOM)                    │
└─────────────────────────────────────────────────────────────┘
```

## Folder Structure

```
├── app/                    # Expo Router directory
│   ├── _layout.tsx        # Root layout
│   ├── index.tsx          # Home screen
│   ├── (tabs)/           # Tab navigation group
│   │   ├── _layout.tsx   # Tab navigator
│   │   ├── home.tsx      # Home tab
│   │   └── profile.tsx   # Profile tab
│   ├── [id].tsx          # Dynamic route
│   └── modal.tsx         # Modal screen
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Header.tsx
├── hooks/                # Custom React hooks
│   ├── useAuth.ts
│   ├── useApi.ts
│   └── useStorage.ts
├── lib/                  # Utilities and helpers
│   ├── api.ts
│   ├── storage.ts
│   └── constants.ts
├── types/                # TypeScript types
│   └── index.ts
├── assets/               # Images, fonts, etc.
│   ├── images/
│   └── fonts/
├── app.json              # Expo configuration
└── .autoplans/          # AutoPlans management
```

## Navigation Patterns

### File-Based Routing (Expo Router)

```
app/
├── index.tsx              → /
├── about.tsx              → /about
├── users/
│   ├── index.tsx         → /users
│   └── [id].tsx          → /users/:id
└── (tabs)/
    ├── _layout.tsx       # Tab navigator
    ├── home.tsx          → /home (tab)
    └── profile.tsx       → /profile (tab)
```

### Navigation Implementation

```typescript
// app/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen 
        name="modal" 
        options={{ presentation: 'modal' }} 
      />
    </Stack>
  );
}

// Navigation in components
import { Link, router } from 'expo-router';

<Link href="/about">About</Link>
<Button onPress={() => router.push('/about')}>Go to About</Button>
```

## Component Patterns

### Basic Screen Component

```typescript
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
```

### Platform-Specific Code

```typescript
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === 'ios' ? 20 : 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
```

## State Management

### Local State (useState)

```typescript
import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```

### Global State (Context)

```typescript
// contexts/AuthContext.tsx
import { createContext, useContext, useState } from 'react';

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  
  const login = async (email: string, password: string) => {
    // Login logic
    const user = await api.login(email, password);
    setUser(user);
  };
  
  const logout = () => setUser(null);
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
```

### Persistent Storage (AsyncStorage)

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data
await AsyncStorage.setItem('user', JSON.stringify(user));

// Retrieve data
const userData = await AsyncStorage.getItem('user');
const user = userData ? JSON.parse(userData) : null;

// Remove data
await AsyncStorage.removeItem('user');
```

## Expo Native Modules

### Camera & Image Picker

```typescript
import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  
  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};
```

### Location

```typescript
import * as Location from 'expo-location';

const getLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission denied');
    return;
  }
  
  const location = await Location.getCurrentPositionAsync({});
  console.log(location.coords);
};
```

### Push Notifications

```typescript
import * as Notifications from 'expo-notifications';

// Request permissions
const { status } = await Notifications.requestPermissionsAsync();

// Get push token
const token = (await Notifications.getExpoPushTokenAsync()).data;

// Listen for notifications
Notifications.addNotificationReceivedListener((notification) => {
  console.log(notification);
});
```

## Styling Approaches

### StyleSheet (Built-in)

```typescript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
```

### NativeWind (Tailwind for RN)

```typescript
import { View, Text } from 'react-native';

<View className="flex-1 justify-center items-center bg-gray-100">
  <Text className="text-2xl font-bold text-blue-600">Hello</Text>
</View>
```

## Performance Optimization

1. **FlatList**: Use for long lists instead of ScrollView
2. **Memoization**: Use React.memo, useMemo, useCallback
3. **Image Optimization**: Use Expo Image for better performance
4. **Code Splitting**: Lazy load heavy screens
5. **Avoid Inline Functions**: In render methods

## Build & Deployment

### Development Build

```bash
# Using Expo Go
npx expo start

# Custom development build
eas build --profile development --platform ios
eas build --profile development --platform android
```

### Production Build

```bash
# iOS
eas build --profile production --platform ios

# Android
eas build --profile production --platform android

# Submit to stores
eas submit --platform ios
eas submit --platform android
```

## Testing Strategy

- **Unit Tests**: Jest for logic testing
- **Component Tests**: React Native Testing Library
- **E2E Tests**: Detox for end-to-end testing
- **Manual Testing**: Test on real devices

## Security Considerations

1. **Secure Storage**: Use expo-secure-store for sensitive data
2. **API Keys**: Never hardcode, use environment variables
3. **HTTPS**: Always use HTTPS for API calls
4. **Input Validation**: Validate all user input
5. **Permissions**: Request only necessary permissions

---
*Architecture evolves with project needs. Update this document as the system grows.*
