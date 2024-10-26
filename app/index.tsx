import { StyleSheet, ScrollView, View, Platform } from 'react-native';

import GradientItem from '@/components/GradientItem';

import { gradients } from '@/constants/Gradients';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {
        gradients.map((row, index) => (
          <View key={index} style={styles.gradientsContainer}>
            {
              row.map(({ name, colors }, index) => (
                <GradientItem key={index} colors={colors} gradientName={name} />
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
  },
  gradientsContainer: {
    flexDirection: 'row',
  }
});
