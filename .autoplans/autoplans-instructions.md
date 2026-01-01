# Expo Mobile App - AI Development Instructions

## Project Context

This is an **Expo mobile application** using:
- Expo (managed workflow)
- React Native
- TypeScript
- Expo Router (file-based navigation)
- Cross-platform (iOS, Android, Web)

## Critical Rules for AI Agents

### 1. React Native Component Usage

**Use React Native components, NOT web HTML:**

```typescript
// ✅ Correct: React Native components
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

<View style={styles.container}>
  <Text style={styles.title}>Hello</Text>
  <Image source={{ uri: imageUrl }} style={styles.image} />
  <TouchableOpacity onPress={handlePress}>
    <Text>Click me</Text>
  </TouchableOpacity>
</View>

// ❌ Wrong: Using web HTML elements
<div className="container">
  <h1>Hello</h1>  {/* NO! Use <Text> */}
  <img src={imageUrl} />  {/* NO! Use <Image> */}
  <button onClick={handlePress}>Click</button>  {/* NO! Use TouchableOpacity */}
</div>
```

### 2. Expo Router Navigation

**File-based routing (similar to Next.js):**

```
app/
├── _layout.tsx            → Root layout
├── index.tsx              → / (home screen)
├── about.tsx              → /about
├── users/
│   ├── index.tsx         → /users
│   └── [id].tsx          → /users/:id (dynamic)
└── (tabs)/               → Tab navigator group
    ├── _layout.tsx       → Tab configuration
    ├── home.tsx          → /home (tab)
    └── profile.tsx       → /profile (tab)
```

**Navigation patterns:**

```typescript
import { Link, router, useRouter } from 'expo-router';

// ✅ Correct: Using Link component
<Link href="/about">
  <Text>About</Text>
</Link>

// ✅ Correct: Programmatic navigation
router.push('/about');
router.replace('/home');
router.back();

// ✅ Correct: Dynamic routes
router.push(`/users/${userId}`);

// ❌ Wrong: Using web navigation
window.location.href = '/about';  // NO!
<a href="/about">About</a>  // NO!
```

### 3. Styling with StyleSheet

**Always use StyleSheet.create:**

```typescript
import { StyleSheet, View, Text } from 'react-native';

export default function MyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

// ❌ Wrong: Inline styles everywhere
<View style={{ flex: 1, justifyContent: 'center' }}>  // Avoid inline styles
```

**Flexbox is the default layout:**
- No `display: flex` needed (it's default)
- Use `flex: 1` to fill available space
- `flexDirection: 'row'` or `'column'` (default)

### 4. Platform-Specific Code

**Handle iOS and Android differences:**

```typescript
import { Platform, StyleSheet } from 'react-native';

// Conditional rendering
{Platform.OS === 'ios' && <IOSOnlyComponent />}
{Platform.OS === 'android' && <AndroidOnlyComponent />}

// Platform.select for different values
const styles = StyleSheet.create({
  container: {
    padding: Platform.select({
      ios: 20,
      android: 16,
      default: 18,
    }),
  },
  // iOS shadow vs Android elevation
  card: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
```

### 5. Safe Area Handling

**Always use SafeAreaView for notches/status bars:**

```typescript
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Content safe from notch, status bar */}
    </SafeAreaView>
  );
}

// ❌ Wrong: Content hidden behind notch
<View style={styles.container}>
  {/* May be hidden on iPhone with notch */}
</View>
```

### 6. Touch Interactions

**Use appropriate touchable components:**

```typescript
import {
  TouchableOpacity,
  TouchableHighlight,
  Pressable
} from 'react-native';

// ✅ Correct: TouchableOpacity (most common)
<TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
  <Text>Press me</Text>
</TouchableOpacity>

// ✅ Correct: Pressable (modern, more control)
<Pressable
  onPress={handlePress}
  style={({ pressed }) => [
    styles.button,
    pressed && styles.buttonPressed
  ]}
>
  <Text>Press me</Text>
</Pressable>

// ❌ Wrong: Using web button
<button onClick={handlePress}>Press me</button>  // NO!
```

**Touch target sizes:**
- Minimum 44x44 points (iOS guideline)
- Minimum 48x48 dp (Android guideline)

### 7. Lists & Performance

**Use FlatList for long lists:**

```typescript
import { FlatList } from 'react-native';

// ✅ Correct: FlatList for performance
<FlatList
  data={items}
  renderItem={({ item }) => <ItemComponent item={item} />}
  keyExtractor={(item) => item.id}
  // Performance optimizations
  initialNumToRender={10}
  maxToRenderPerBatch={10}
  windowSize={5}
  removeClippedSubviews={true}
/>

// ❌ Wrong: ScrollView with map (bad performance)
<ScrollView>
  {items.map(item => <ItemComponent key={item.id} item={item} />)}
</ScrollView>
// ⚠️ Only use ScrollView for small, fixed-size lists
```

### 8. Images

**Use Expo Image or React Native Image:**

```typescript
import { Image } from 'expo-image';
// or
import { Image } from 'react-native';

// ✅ Correct: Local image
<Image source={require('../assets/logo.png')} style={styles.logo} />

// ✅ Correct: Remote image
<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  style={{ width: 200, height: 200 }}
  contentFit="cover"
/>

// ❌ Wrong: Web img tag
<img src="../assets/logo.png" />  // NO!
```

### 9. Expo Native Modules

**Camera/Image Picker:**

```typescript
import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
  // Request permission first
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission required!');
    return;
  }
  
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

**Location:**

```typescript
import * as Location from 'expo-location';

const getLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission denied');
    return;
  }
  
  const location = await Location.getCurrentPositionAsync({});
  console.log(location.coords.latitude, location.coords.longitude);
};
```

**Push Notifications:**

```typescript
import * as Notifications from 'expo-notifications';

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Request permission and get token
const { status } = await Notifications.requestPermissionsAsync();
const token = (await Notifications.getExpoPushTokenAsync()).data;
```

### 10. Persistent Storage

**Use AsyncStorage for simple data:**

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data
await AsyncStorage.setItem('user', JSON.stringify(user));

// Retrieve data
const userData = await AsyncStorage.getItem('user');
const user = userData ? JSON.parse(userData) : null;

// Remove data
await AsyncStorage.removeItem('user');

// ⚠️ For sensitive data, use expo-secure-store instead
import * as SecureStore from 'expo-secure-store';
await SecureStore.setItemAsync('token', authToken);
const token = await SecureStore.getItemAsync('token');
```

### 11. Environment Variables

**Use Expo environment variables:**

```typescript
// app.config.js
export default {
  expo: {
    extra: {
      apiUrl: process.env.API_URL || 'http://localhost:3000',
    },
  },
};

// Access in app
import Constants from 'expo-constants';
const apiUrl = Constants.expoConfig?.extra?.apiUrl;
```

### 12. TypeScript Types

**Define proper types for components:**

```typescript
import { ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Button({ title, onPress, disabled, style, textStyle }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, style]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
```

### 13. Common Mistakes to Avoid

❌ **Don't use web HTML elements** (div, span, h1, button, etc.)
❌ **Don't use web CSS properties** (no `display: block`, `position: fixed`)
❌ **Don't use window or document** (not available in React Native)
❌ **Don't use ScrollView for long lists** (use FlatList)
❌ **Don't forget SafeAreaView** (content may be hidden)
❌ **Don't ignore platform differences** (iOS vs Android)
❌ **Don't forget to request permissions** (camera, location, etc.)
❌ **Don't use inline styles everywhere** (use StyleSheet.create)

### 14. Layout Patterns

**Common Flexbox patterns:**

```typescript
// Center content
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}

// Horizontal layout
row: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10, // Space between items
}

// Space between
spaceBetween: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

// Fill available space
fill: {
  flex: 1,
}
```

## AutoPlans Integration

When working on tasks:
1. Check `.autoplans/tasks.md` for current work
2. Use `autoplans_update_task` to mark progress
3. Test on both iOS and Android simulators
4. Update architecture.md when adding major features

## Development Commands

```bash
# Start Expo development server
npx expo start
pnpm start
npm start

# Run on specific platform
npx expo start --ios        # iOS simulator
npx expo start --android    # Android emulator
npx expo start --web        # Web browser

# Clear cache
npx expo start -c

# Build for production (EAS)
eas build --profile production --platform ios
eas build --profile production --platform android
```

## Testing on Devices

1. **Expo Go**: Quick testing without building
2. **Development Build**: Custom native code testing
3. **Production Build**: Final testing before release

## Getting Help

- Expo Docs: https://docs.expo.dev
- React Native Docs: https://reactnative.dev/docs
- Expo Router: https://expo.github.io/router/docs

---
*Follow these instructions for optimal AI-assisted Expo mobile development.*
