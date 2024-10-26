import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface GradientItemProps {
  colors: string[];
  gradientName: string;
}

export default function GradientItem({ colors, gradientName }: GradientItemProps) {
  return (
    <Link href={{ pathname: '/gradient-details', params: { gradientName, colors }}} asChild>
      <TouchableOpacity style={styles.container}>
        <LinearGradient
          colors={colors}
          style={styles.gradient}
        >
          <Text style={styles.text}>{gradientName}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    width: '100%',
    height: 200,
    padding: 12,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
