import { StyleSheet, ScrollView, View, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

import { gradients } from '@/constants/Gradients';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {
        gradients.map((row, index) => (
          <View key={index}>
            {
              row.map(({ name, colors }, index) => (
                <ThemedText key={index}>{name}</ThemedText>
              ))
            }
          </View>
        ))
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 140 : 0,
  }
});
