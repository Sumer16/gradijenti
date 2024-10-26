import { LinearGradient, LinearGradientPoint } from 'expo-linear-gradient';
import { Redirect, Stack, useLocalSearchParams } from 'expo-router';

import React, { useState } from 'react';
import { StyleSheet, ScrollView, Platform, View, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';

type GradientDirection =
  | 'topToBottom'
  | 'bottomToTop'
  | 'leftToRight'
  | 'rightToLeft';

interface GradientDirections {
  [key: string]: {
    start: LinearGradientPoint;
    end: LinearGradientPoint;
  };
}

const gradientDirections: GradientDirections = {
  topToBottom: { start: { x: 0, y: 0 }, end: { x: 0, y: 1 } },
  bottomToTop: { start: { x: 0, y: 1 }, end: { x: 0, y: 0 } },
  leftToRight: { start: { x: 0, y: 0 }, end: { x: 1, y: 0 } },
  rightToLeft: { start: { x: 1, y: 0 }, end: { x: 0, y: 0 } },
};

export default function GradientDetailsScreen() {
  const [direction, setDirection] = useState<GradientDirection>('topToBottom');

  const { colors, gradientName } = useLocalSearchParams<{ colors: string, gradientName: string }>();

  if (!gradientName || !colors) {
    // @ts-ignore
    return <Redirect href={'/+not-found'} />;
  }

  return (
    <>
      <Stack.Screen options={{ title: gradientName }} />
      <ScrollView contentContainerStyle={styles.container}>
        <LinearGradient
          colors={colors.split(',')}
          style={StyleSheet.absoluteFill}
          start={gradientDirections[direction].start}
          end={gradientDirections[direction].end}
        />
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            position: 'absolute',
            bottom: 30,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              gap: 15,
              marginBottom: 12,
              alignSelf: 'center',
            }}
          >
            <ThemedText type='defaultSemiBold'>{direction}</ThemedText>
            <ThemedText type='defaultSemiBold'>{colors.replace(',', ' - ')}</ThemedText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <TouchableOpacity onPress={() => setDirection('topToBottom')}>
              <Ionicons name='chevron-down-circle' size={40} color={'white'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setDirection('bottomToTop')}>
              <Ionicons name='chevron-up-circle' size={40} color={'white'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setDirection('leftToRight')}>
              <Ionicons
                name='chevron-forward-circle'
                size={40}
                color={'white'}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setDirection('rightToLeft')}>
              <Ionicons name='chevron-back-circle' size={40} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 150 : 0,
    padding: 16,
  },
});
