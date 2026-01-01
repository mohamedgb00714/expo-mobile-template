import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Modal Screen</Text>
      <Text style={styles.subtitle}>
        This is a modal presentation. You can use modals for forms, details, or
        any temporary content.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Modals are great for:
        </Text>
        <Text style={styles.listItem}>• User authentication</Text>
        <Text style={styles.listItem}>• Creating new items</Text>
        <Text style={styles.listItem}>• Viewing details</Text>
        <Text style={styles.listItem}>• Confirmation dialogs</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1f2937',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#d1d5db',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#374151',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    width: '100%',
  },
  cardText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 12,
    fontWeight: '600',
  },
  listItem: {
    fontSize: 16,
    color: '#d1d5db',
    marginBottom: 8,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
