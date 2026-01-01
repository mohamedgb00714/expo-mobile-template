import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.subtitle}>
          Discover amazing features and content
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🎨 UI Components</Text>
          <Text style={styles.cardText}>
            Add your custom components here. Use React Native's built-in
            components or add third-party libraries.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📦 State Management</Text>
          <Text style={styles.cardText}>
            Choose your preferred state management solution: Context API, Zustand,
            Redux Toolkit, Jotai, or others.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🌐 API Integration</Text>
          <Text style={styles.cardText}>
            Connect to your backend API using fetch, axios, or React Query for
            data fetching and caching.
          </Text>
        </View>
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
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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
    lineHeight: 24,
  },
});
