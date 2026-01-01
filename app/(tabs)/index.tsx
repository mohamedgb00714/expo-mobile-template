import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Expo! 👋</Text>
        <Text style={styles.subtitle}>
          This is a mobile app template with Expo Router and TypeScript
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🚀 Features</Text>
          <Text style={styles.cardText}>• Expo SDK 52 (Latest)</Text>
          <Text style={styles.cardText}>• React Native 0.76+</Text>
          <Text style={styles.cardText}>• TypeScript 5.7+</Text>
          <Text style={styles.cardText}>• Expo Router (File-based routing)</Text>
          <Text style={styles.cardText}>• Tab Navigation</Text>
          <Text style={styles.cardText}>• New Architecture Ready</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📱 Get Started</Text>
          <Text style={styles.cardText}>
            Edit app/(tabs)/index.tsx to see your changes
          </Text>
          <Text style={styles.cardText}>
            Run on iOS, Android, or Web with a single codebase
          </Text>
        </View>

        <Link href="/modal" style={styles.link}>
          <Text style={styles.linkText}>Open Modal</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 30,
    lineHeight: 24,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1f2937',
  },
  cardText: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 8,
    lineHeight: 24,
  },
  link: {
    marginTop: 20,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '600',
    textAlign: 'center',
  },
});
