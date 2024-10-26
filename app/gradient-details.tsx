import { Redirect, useLocalSearchParams } from 'expo-router';

import { StyleSheet, ScrollView, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText'

export default function GradientDetailsScreen() {
  const { colors, gradientName } = useLocalSearchParams<{ colors: string, gradientName: string }>();

  if (!gradientName || !colors) {
    // @ts-ignore
    return <Redirect href={'/+not-found'} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText>{gradientName}</ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 140 : 0,
  },
  gradientsContainer: {
    flexDirection: 'row',
  }
});
