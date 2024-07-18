import { Stack } from 'expo-router';
import React from 'react';

const RootLayout: React.FC = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="HomeScreen" />
      <Stack.Screen name="QuestionsScreen" />
    </Stack>
  );
};

export default RootLayout;

